import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function PrivacyPolicy() {
  return (
    <PageFrame pageTitle="Privacy Policy" pageSubTitle="I'm committed to respecting the privacy of all visitors and users. This page provides detailed information about the types of data that is collected and the reasons for collecting it.">
      <MarkdownProse markdownContent={markdownContent.page.content.privacyPolicy} />
    </PageFrame>
  )
};
