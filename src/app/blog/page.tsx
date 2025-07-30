import { config } from "@/config";

import { Rss } from "lucide-react";

import { PagedBlogPostPreviewGrid } from "@/components/blog/PagedBlogPostPreviewGrid";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { BLOG_POSTS_PER_PAGE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export default function Blog() {
  return (
    <PageFrame pageTitle="Empowering Your Tech Journey: Discover Tutorials and Insights on Technologies" infoBox={{ Icon: Rss, infoText: markdownContent.rss.blog }} pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.blogPage} />
      <PagedBlogPostPreviewGrid postLimit={BLOG_POSTS_PER_PAGE} page={1} />
    </PageFrame>
  );
}
