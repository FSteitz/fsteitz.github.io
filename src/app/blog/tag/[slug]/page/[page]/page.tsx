import { BlogPostCache } from "@/lib/blog-post-cache";
import { BLOG_POSTS_PER_PAGE } from "@/lib/constants";
import { computeIfAbsent, generateStaticParamsForPagnination, toPageNumber } from "@/lib/utils";

import { createPageContent } from "../../pageContent";

interface PathParams {
    slug: string,
    page: string
}

export async function generateStaticParams(): Promise<PathParams[]> {
    const posts = await BlogPostCache.getAllPosts();
    const postCountByTag = new Map<string, number>;

    posts.forEach(post => {
        post.tags.forEach(tag => {
            const tagName = tag.name;
            const countByTag = computeIfAbsent(postCountByTag, tagName, () => 0)
            postCountByTag.set(tagName, countByTag + 1);
        })
    });

    const pathParams: PathParams[] = [];
    postCountByTag.forEach((countByTag, tagName) => {
        const pageParams = generateStaticParamsForPagnination(countByTag, BLOG_POSTS_PER_PAGE);
        pageParams.forEach(param => {
            pathParams.push({ slug: tagName, page: param.page });
        })
    })

    return pathParams;
}

export default async function BlogPostsByTagWithPage(props: { params: Promise<PathParams> }) {
    const params = await props.params;
    const { slug, page } = params;
    return createPageContent(slug, toPageNumber(page))
}