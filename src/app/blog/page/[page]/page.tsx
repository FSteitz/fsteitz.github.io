import { config } from "@/config";

import { PagedBlogPostPreviewGrid } from "@/components/blog/PagedBlogPostPreviewGrid";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { BlogPostCache } from "@/lib/blog-post-cache";
import { PagePathParam } from "@/lib/types";
import { generateStaticParamsForPagnination, maybeAddPageIndicator, toPageNumber } from "@/lib/utils";

import { markdownContent } from "@/text/markdown";

const POST_LIMIT_PER_PAGE = 8;

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