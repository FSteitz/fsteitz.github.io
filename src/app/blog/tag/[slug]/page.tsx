import { SlugPathParam } from "@/lib/types";
import { wisp } from "@/lib/utils";

import { createPageContent } from "./pageContent";

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