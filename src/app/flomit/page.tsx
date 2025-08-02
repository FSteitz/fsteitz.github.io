import { config } from "@/config";

import { Metadata } from "next";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { FLOMIT_BASE_PATH, LOCALE } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `${config.website.name}: Overview of a Former IT Services Company`,
    description: `${config.website.name} and Michael Kornas founded an IT services company in 2017. Learn about their journey and the reasons for disbanding the company here.`,
    alternates: {
      canonical: `${config.baseUrl}/${FLOMIT_BASE_PATH}`
    },
    openGraph: {
      title: `${config.website.name}: Overview of a Former IT Services Company`,
      description: `${config.website.name} and Michael Kornas founded an IT services company in 2017. Learn about their journey and the reasons for disbanding the company here.`,
      url: `${config.baseUrl}/${FLOMIT_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: []
    }
  };
}

export default function Flomit() {
  return (
    <PageFrame pageTitle="flomit - A Short Venture" pageSubTitle="flomit was a German company that provided IT services to small and medium-sized enterprises in and around Koblenz. It was founded in 2017 and dissolved in 2018.">
      <MarkdownProse markdownContent={markdownContent.page.content.flomit} />
    </PageFrame>
  );
}
