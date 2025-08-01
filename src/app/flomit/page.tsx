import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function Flomit() {
  return (
    <PageFrame pageTitle="flomit - A Short Venture" pageSubTitle="flomit was a German company that provided IT services to small and medium-sized enterprises in and around Koblenz. It was founded in 2017 and dissolved in 2018.">
      <MarkdownProse markdownContent={markdownContent.page.content.flomit} />
    </PageFrame>
  );
}
