import { config } from "@/config";

import { Metadata } from "next";

import { PagedBlogPostPreviewGrid } from "@/components/blog/PagedBlogPostPreviewGrid";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { LOCALE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Discover Software Development Insights, Tools & Tutorials",
    description: "Discover insights, tutorials, and tools in software development! Join me to enhance your programming skills and navigate the ever-evolving tech landscape!",
    alternates: {
      canonical: `${config.baseUrl}`
    },
    openGraph: {
      title: "Discover Software Development Insights, Tools & Tutorials",
      description: "Discover insights, tutorials, and tools in software development! Join me to enhance your programming skills and navigate the ever-evolving tech landscape!",
      url: `${config.baseUrl}`,
      locale: LOCALE,
      type: "website",
      images: []
    }
  };
}

export default function Home() {
  return (
    <PageFrame pageTitle="Software Development Insights, Tools, and Tutorials for Tech Enthusiasists" pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.homePage} />
      <PagedBlogPostPreviewGrid postLimit={2} title="Latest Blog Posts" />
    </PageFrame>
  );
}
