import { config } from "@/config";

import { Metadata } from "next";
import Link from "next/link";

import { FaHashtag } from "react-icons/fa";

import { Rss } from "lucide-react";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";
import { Button } from "@/components/ui/button";

import { BLOG_TAG_BASE_PATH, IMG_OG_BLOG, LOCALE } from "@/lib/constants";
import { wisp } from "@/lib/utils";

import { markdownContent } from "@/text/markdown";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Insights from ${config.website.name}: Discover different hashtags`,
    description: "Explore a variety of engaging articles and tutorials on technology and software engineering, organized by hashtags for easy navigation and valuable insights.",
    alternates: {
      canonical: `${config.baseUrl}/${BLOG_TAG_BASE_PATH}`
    },
    openGraph: {
      title: `Insights from ${config.website.name}: Discover different hashtags`,
      description: "Explore a variety of engaging articles and tutorials on technology and software engineering, organized by hashtags for easy navigation and valuable insights.",
      url: `${config.baseUrl}/${BLOG_TAG_BASE_PATH}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_BLOG]
    }
  };
}

export default async function BlogTagList() {
  const result = await wisp.getTags();
  return (
    <PageFrame pageTitle="Discover Inspiring Technology and Software Engineering Articles by Hashtag" infoBox={{ Icon: Rss, infoText: markdownContent.rss.blog }} pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.blogTagList} />
      <div className="max-w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-12 mx-auto">
        {result.tags.map((tag) => (
          <Button key={tag.id} variant="secondary" className={`p-4 h-20 w-80 xl:w-90 shadow-md text-2xl font-bold mt-10`}>
            <Link href={`/${BLOG_TAG_BASE_PATH}/${tag.name}`} className={`w-full h-full flex flex-row items-center text-left`}>
              <FaHashtag className="mr-5 !w-10 !h-10 block" /> {tag.name}
            </Link>
          </Button>
        ))}
      </div>
    </PageFrame>
  );
}