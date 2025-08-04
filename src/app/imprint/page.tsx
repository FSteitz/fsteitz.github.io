import { config } from "@/config";

import { Metadata } from "next";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { IMG_OG_DEFAULT, IMPRINT_BASE_PATH, LOCALE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${config.website.name} Website Imprint: In Accordance with § 5 TMG`,
    description: `Imprint for ${config.website.name}'s website. Discover insights, tutorials, and tools in software development to enhance your coding skills!`,
    alternates: {
      canonical: `${config.baseUrl}/${IMPRINT_BASE_PATH}`
    },
    openGraph: {
      title: `${config.website.name} Website Imprint: In Accordance with § 5 TMG`,
      description: `Imprint for ${config.website.name}'s website. Discover insights, tutorials, and tools in software development to enhance your coding skills!`,
      url: `${config.baseUrl}/${IMPRINT_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_DEFAULT]
    }
  };
}

export default function Imprint() {
  return (
    <PageFrame pageTitle="Imprint" pageSubTitle="The information presented on this page is meant to inform readers about who is responsible for this website. It provides all the necessary information to comply with German § 5 TMG.">
      <MarkdownProse markdownContent={markdownContent.page.content.imprintPage} />
    </PageFrame>
  );
}
