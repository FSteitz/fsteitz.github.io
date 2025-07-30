import CookieConsentAccordion from "@/components/consent/CookieConsentAccordion";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";

import { markdownContent } from "@/text/markdown";

export default function PrivacySettings() {
  return (
    <PageFrame pageTitle="Privacy Settings" pageSubTitle="The protection of your personal data is important to me!">
      <MarkdownProse markdownContent={markdownContent.page.content.privacySettings} />
      <div className="max-w-full prose prose-invert text-xl leading-8 mx-auto">
        <CookieConsentAccordion />
      </div>
    </PageFrame>
  )
};