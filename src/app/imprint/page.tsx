import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function Imprint() {
  return (
    <PageFrame pageTitle="Imprint" pageSubTitle="The information presented on this page is meant to inform readers about who is responsible for this website. It provides all the necessary information to comply with German § 5 TMG.">
      <MarkdownProse markdownContent={markdownContent.page.introduction.imprintPage} />
    </PageFrame>
  );
}
