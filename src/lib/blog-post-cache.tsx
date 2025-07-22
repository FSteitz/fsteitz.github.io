import { Author, TagInPost } from "@wisp-cms/client";

import { wisp } from "@/lib/utils";

let allPosts: CachedPost[];

export interface CachedPost {
    id: string
    createdAt: Date
    teamId: string
    description: string | null
    title: string
    content: string
    slug: string
    image: string | null
    authorId: string
    updatedAt: Date
    publishedAt: Date | null
    author: Author
    tags: TagInPost[]
}

async function getAllPostsCached(): Promise<CachedPost[]> {
    if (allPosts === undefined || allPosts.length === 0) {
        const { posts } = await wisp.getPosts();
        allPosts = new Array<CachedPost>(posts.length);
        for (let i = 0; i < posts.length; i++) {
            // The entire post must be fetched again because the getPosts() endpoint does not return post content
            const { post } = await wisp.getPost(posts[i].slug)

            // Casting the original post to CachedPost (contains only a subset of all properties)
            allPosts[i] = post as CachedPost;
        }
    }

    return allPosts;
}

async function findBySlug(slug: string): Promise<CachedPost | undefined> {
    const allPosts = await getAllPostsCached();
    const matchingPosts = allPosts.filter(post => slug === post.slug);

    let foundPost;
    if (matchingPosts) {
        if (matchingPosts.length > 1) {
            console.warn(`Found more than one post for slug '${slug}': ${matchingPosts.length}`)
        }

        foundPost = matchingPosts[0];
    }

    return foundPost;
}

export const BlogPostCache = {
    getAllPosts: getAllPostsCached,
    findBySlug: findBySlug
}