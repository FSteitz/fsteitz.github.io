import { config } from "@/config";

import { Metadata } from "next";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { IMG_OG_DEFAULT, LOCALE, PRIVACY_POLICY_BASE_PATH } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Privacy Policy for ${config.website.name}'s Website`,
    description: `Privacy policy for ${config.website.name}'s website. Discover insights, tutorials, and tools in software development to enhance your coding skills!`,
    alternates: {
      canonical: `${config.baseUrl}/${PRIVACY_POLICY_BASE_PATH}`
    },
    openGraph: {
      title: `Privacy Policy for ${config.website.name}'s Website`,
      description: `Privacy policy for ${config.website.name}'s website. Discover insights, tutorials, and tools in software development to enhance your coding skills!`,
      url: `${config.baseUrl}/${PRIVACY_POLICY_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_DEFAULT]
    }
  };
}

export default function PrivacyPolicy() {
  return (
    <PageFrame pageTitle="Privacy Policy" pageSubTitle="I'm committed to respecting the privacy of all visitors and users. This page provides detailed information about the types of data that is collected and the reasons for collecting it.">
      <MarkdownProse markdownContent={markdownContent.page.content.privacyPolicy} />
    </PageFrame>
  )
};
