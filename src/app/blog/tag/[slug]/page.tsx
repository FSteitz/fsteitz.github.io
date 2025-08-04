import { config } from "@/config";

import { Metadata } from "next";

import { BLOG_TAG_BASE_PATH, IMG_OG_BLOG, LOCALE } from "@/lib/constants";
import { SlugPathParam } from "@/lib/types";
import { wisp } from "@/lib/utils";

import { createPageContent } from "./pageContent";

export async function generateMetadata(props: { params: Promise<SlugPathParam> }): Promise<Metadata> {
  const params = await props.params;
  const { slug } = params;

  return {
    title: `Explore Tech & Engineering Blog Posts With #${slug}`,
    description: `Explore captivating articles & tutorials tagged with #${slug}. Discover tools and resources to enhance your skills in technology and software engineering!`,
    alternates: {
      canonical: `${config.baseUrl}/${BLOG_TAG_BASE_PATH}/${slug}`
    },
    openGraph: {
      title: `Explore Tech & Engineering Blog Posts With #${slug}`,
      description: `Explore captivating articles & tutorials tagged with #${slug}. Discover tools and resources to enhance your skills in technology and software engineering!`,
      url: `${config.baseUrl}/${BLOG_TAG_BASE_PATH}/${slug}`,
      locale: LOCALE,
      type: "website",
      images: [IMG_OG_BLOG]
    }
  };
}

export async function generateStaticParams(): Promise<SlugPathParam[]> {
  const { tags } = await wisp.getTags();
  return tags.map((tag) => ({
    slug: tag.name,
  }))
}

export default async function BlogPostsByTag(props: { params: Promise<SlugPathParam> }) {
  const params = await props.params;
  const { slug } = params;
  return createPageContent(slug, 1)
};