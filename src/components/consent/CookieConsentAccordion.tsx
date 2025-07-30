import Markdown from "react-markdown";

import { AnalyticsConsent } from "@/components/consent/AnalyticsConsent";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

import { markdownContent } from "@/text/markdown";

export default function CookieConsentAccordion() {
    return (
        <Accordion type="single" className="max-w-[80%] mx-auto" collapsible>
            <AccordionItem value="cloudflare-rum">
                <AccordionTrigger>Cloudflare RUM</AccordionTrigger>
                <AccordionContent className="flex flex-col md:flex-row max-md:gap-4">
                    <AnalyticsConsent autoAttachScript={true} className="scale-125 mt-1.5 ml-1" />
                    <div className="pl-4 mt-[-1.4em] text-lg">
                        <Markdown>{markdownContent.hint.cloudflareAnalytics}</Markdown>
                    </div>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
};