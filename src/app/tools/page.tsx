import { config } from "@/config";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function Tools() {
  return (
    <PageFrame pageTitle="Discover Tools to Enhance Your Skills and Productivity: Get Started Now!" pageSubTitle={`by ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.toolsPage} />
      <hr className="max-w-[80%] my-12 mx-auto" />
      <MarkdownProse markdownContent={markdownContent.page.content.toolsPage3rdParty} />
    </PageFrame>
  );
}
