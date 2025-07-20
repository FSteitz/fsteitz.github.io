import { config } from "@/config";

import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function AboutMe() {
  return (
    <PageFrame pageTitle="About Me" pageSubTitle={`My name is ${config.website.name}`}>
      <MarkdownProse markdownContent={markdownContent.page.introduction.aboutMePage} />
    </PageFrame>
  );
}
