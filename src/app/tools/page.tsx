import { config } from "@/config";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function Tools() {
  return (
    <PageFrame pageTitle="Crafting Solutions: A Collection of Small Tools to Improve Skills and Efficiency" pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.toolsPage} />
    </PageFrame>
  );
}
