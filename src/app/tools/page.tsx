import { config } from "@/config";

import { Metadata } from "next";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { IMG_OG_TOOLS, LOCALE, TOOLS_BASE_PATH } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Discover Software Development Tools for Every Skill Level!",
    description: "Explore a curated collection of software development tools for all skill levels. Improve your coding skills with resources designed for every developer!",
    alternates: {
      canonical: `${config.baseUrl}/${TOOLS_BASE_PATH}`
    },
    openGraph: {
      title: "Discover Software Development Tools for Every Skill Level!",
      description: "Explore a curated collection of software development tools for all skill levels. Improve your coding skills with resources designed for every developer!",
      url: `${config.baseUrl}/${TOOLS_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_TOOLS]
    }
  };
}

export default function Tools() {
  return (
    <PageFrame pageTitle="Discover Tools to Enhance Your Skills and Productivity: Get Started Now!" pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.toolsPage} />
      <hr className="max-w-[80%] my-12 mx-auto" />
      <MarkdownProse markdownContent={markdownContent.page.content.toolsPage3rdParty} />
    </PageFrame>
  );
}
