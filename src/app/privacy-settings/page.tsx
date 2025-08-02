import { config } from "@/config";

import { Metadata } from "next";

import CookieConsentAccordion from "@/components/consent/CookieConsentAccordion";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { LOCALE, PRIVACY_SETTINGS_BASE_PATH } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Privacy Settings for ${config.website.name}'s Website`,
    description: `Privacy settings for ${config.website.name}'s website. Discover insights, tutorials, and tools in software development to enhance your coding skills!`,
    alternates: {
      canonical: `${config.baseUrl}/${PRIVACY_SETTINGS_BASE_PATH}`
    },
    openGraph: {
      title: `Privacy Settings for ${config.website.name}'s Website`,
      description: `Privacy settings for ${config.website.name}'s website. Discover insights, tutorials, and tools in software development to enhance your coding skills!`,
      url: `${config.baseUrl}/${PRIVACY_SETTINGS_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: []
    }
  };
}

export default function PrivacySettings() {
  return (
    <PageFrame pageTitle="Privacy Settings" pageSubTitle="The protection of your personal data is important to me!">
      <MarkdownProse markdownContent={markdownContent.page.content.privacySettings} />
      <div className="max-w-full prose prose-invert text-xl leading-8 mx-auto">
        <CookieConsentAccordion />
      </div>
    </PageFrame>
  )
};