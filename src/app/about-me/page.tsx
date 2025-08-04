import { config } from "@/config";

import { Metadata } from "next";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { ABOUT_ME_BASE_PATH, IMG_OG_ABOUT_ME, LOCALE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${config.website.name}: Experienced Software Developer & Leader`,
    description: `Discover ${config.website.name}'s journey as a software developer with over a decade of experience. Explore insights, tools, and resources for aspiring coders!`,
    alternates: {
      canonical: `${config.baseUrl}/${ABOUT_ME_BASE_PATH}`
    },
    openGraph: {
      title: `${config.website.name}: Experienced Software Developer & Leader`,
      description: `Discover ${config.website.name}'s journey as a software developer with over a decade of experience. Explore insights, tools, and resources for aspiring coders!`,
      url: `${config.baseUrl}/${ABOUT_ME_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_ABOUT_ME]
    }
  };
}

export default function AboutMe() {
  return (
    <PageFrame pageTitle="About Me" pageSubTitle={`My name is ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.content.aboutMePage} />
    </PageFrame>
  );
}
