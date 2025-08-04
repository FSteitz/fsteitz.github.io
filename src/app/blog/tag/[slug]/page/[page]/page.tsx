import { config } from "@/config";

import { Metadata } from "next";

import { BlogPostCache } from "@/lib/blog-post-cache";
import { BLOG_POSTS_PER_PAGE, BLOG_TAG_BASE_PATH, IMG_OG_BLOG, LOCALE, PAGE_PATH_PART } from "@/lib/constants";
import { computeIfAbsent, generateStaticParamsForPagnination, maybeAddPageIndicator, onPageOneOrElse, toPageNumber } from "@/lib/utils";

import { createPageContent } from "../../pageContent";

interface PathParams {
    slug: string,
    page: string
}

export async function generateMetadata(props: { params: Promise<PathParams> }): Promise<Metadata> {
    const params = await props.params;
    const { slug, page } = params;
    const pageNumber = toPageNumber(page);

    return {
        title: `Explore Tech & Engineering Posts With #${slug}${maybeAddPageIndicator(pageNumber)}`,
        description: `Explore articles & tutorials tagged with #${slug}. Discover tools and resources to enhance your skills in technology and software engineering${maybeAddPageIndicator(pageNumber)}`,
        alternates: {
            canonical: `${config.baseUrl}/${onPageOneOrElse(pageNumber, () => `${BLOG_TAG_BASE_PATH}/${slug}`, () => `${BLOG_TAG_BASE_PATH}/${slug}/${PAGE_PATH_PART}${page}`)}`
        },
        openGraph: {
            title: `Explore Tech & Engineering Posts With #${slug}${maybeAddPageIndicator(pageNumber)}`,
            description: `Explore articles & tutorials tagged with #${slug}. Discover tools and resources to enhance your skills in technology and software engineering${maybeAddPageIndicator(pageNumber)}`,
            url: `${config.baseUrl}/${onPageOneOrElse(pageNumber, () => `${BLOG_TAG_BASE_PATH}/${slug}`, () => `${BLOG_TAG_BASE_PATH}/${slug}/${PAGE_PATH_PART}${page}`)}`,
            locale: LOCALE,
            type: "website",
            images: [IMG_OG_BLOG]
        }
    };
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