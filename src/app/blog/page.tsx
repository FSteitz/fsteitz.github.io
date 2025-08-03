import { config } from "@/config";

import { Metadata } from "next";

import { Rss } from "lucide-react";

import { PagedBlogPostPreviewGrid } from "@/components/blog/PagedBlogPostPreviewGrid";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { BLOG_BASE_PATH, BLOG_POSTS_PER_PAGE, LOCALE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Tech Insights & Tutorials for Developers and Enthusiasts",
    description: "Discover tutorials, insights, and resources for developers and tech enthusiasts. Join me in exploring the dynamic world of software development and technology!",
    alternates: {
      canonical: `${config.baseUrl}/${BLOG_BASE_PATH}`
    },
    openGraph: {
      title: "Tech Insights & Tutorials for Developers and Enthusiasts",
      description: "Discover tutorials, insights, and resources for developers and tech enthusiasts. Join me in exploring the dynamic world of software development and technology!",
      url: `${config.baseUrl}/${BLOG_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: []
    }
  };
}

export default function Blog() {
  return (
    <PageFrame pageTitle="Empowering Your Tech Journey: Discover Tutorials and Insights on Technologies" infoBox={{ Icon: Rss, infoText: markdownContent.rss.blog }} pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.blogPage} />
      <PagedBlogPostPreviewGrid postLimit={BLOG_POSTS_PER_PAGE} page={1} />
    </PageFrame>
  );
}
