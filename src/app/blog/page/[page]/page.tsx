import { config } from "@/config";

import { Metadata } from "next";

import { PagedBlogPostPreviewGrid } from "@/components/blog/PagedBlogPostPreviewGrid";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { BlogPostCache } from "@/lib/blog-post-cache";
import { BLOG_BASE_PATH, BLOG_PAGE_BASE_PATH, LOCALE } from "@/lib/constants";
import { PagePathParam } from "@/lib/types";
import { generateStaticParamsForPagnination, maybeAddPageIndicator, onPageOneOrElse, toPageNumber } from "@/lib/utils";

import { markdownContent } from "@/text/markdown";

const POST_LIMIT_PER_PAGE = 8;

export async function generateMetadata(props: { params: Promise<PagePathParam> }): Promise<Metadata> {
    const params = await props.params;
    const { page } = params;
    const pageNumber = toPageNumber(page);

    return {
        title: `Tech Insights for Developers and Enthusiasts${maybeAddPageIndicator(pageNumber)}`,
        description: `Discover tutorials, insights and resources for developers and tech enthusiasts. Join me in exploring the world of software development and technology${maybeAddPageIndicator(pageNumber)}`,
        alternates: {
            canonical: `${config.baseUrl}/${onPageOneOrElse(pageNumber, () => BLOG_BASE_PATH, () => `${BLOG_PAGE_BASE_PATH}${page}`)}`
        },
        openGraph: {
            title: `Tech Insights for Developers and Enthusiasts${maybeAddPageIndicator(pageNumber)}`,
            description: `Discover tutorials, insights and resources for developers and tech enthusiasts. Join me in exploring the world of software development and technology${maybeAddPageIndicator(pageNumber)}`,
            url: `${config.baseUrl}/${onPageOneOrElse(pageNumber, () => BLOG_BASE_PATH, () => `${BLOG_PAGE_BASE_PATH}${page}`)}`,
            locale: LOCALE,
            type: "website",
            images: []
        }
    };
}

export async function generateStaticParams(): Promise<PagePathParam[]> {
    const posts = await BlogPostCache.getAllPosts();
    return generateStaticParamsForPagnination(posts.length, POST_LIMIT_PER_PAGE);
}

export default async function BlogPage(props: { params: Promise<PagePathParam> }) {
    const params = await props.params;
    const { page } = params;
    const pageNumber = toPageNumber(page);

    return (
        <PageFrame pageTitle={`Empowering Your Tech Journey: Discover Tutorials and Insights on Technologies${maybeAddPageIndicator(pageNumber)}`} pageSubTitle={`by ${config.website.name}`}>
            <MarkdownProse markdownContent={markdownContent.page.introduction.blogPage} />
            <PagedBlogPostPreviewGrid postLimit={POST_LIMIT_PER_PAGE} page={pageNumber} />
        </PageFrame>
    );
}