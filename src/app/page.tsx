import { config } from "@/config";

import { LatestBlogPosts } from "@/components/blog/LatestBlogPosts";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function Home() {
  return (
    <PageFrame pageTitle="Software Development Insights, Tools, and Tutorials for Tech Enthusiasists" pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.homePage} />
      <LatestBlogPosts postLimit={2} title="Latest Blog Posts" />
    </PageFrame>
  );
}
