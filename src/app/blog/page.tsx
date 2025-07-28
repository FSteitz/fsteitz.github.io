import { config } from "@/config";

import { LatestBlogPosts } from "@/components/blog/LatestBlogPosts";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { BLOG_POSTS_PER_PAGE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export default function Blog() {
  return (
    <PageFrame pageTitle="Empowering Your Tech Journey: Discover Tutorials and Insights on Technologies" pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.blogPage} />
      <LatestBlogPosts postLimit={BLOG_POSTS_PER_PAGE} page={1} />
    </PageFrame>
  );
}
