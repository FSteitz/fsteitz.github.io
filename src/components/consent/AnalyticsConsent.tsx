"use client"

import { config } from "@/config";

import { useEffect, useState } from "react";

import { getCookie, hasCookie, setCookie } from 'cookies-next/client';
import { Cookie } from "lucide-react";

import { GenericInfoBox } from "@/components/info/GenericInfoBox";
import { Switch } from "@/components/ui/switch";

import { markdownContent } from "@/text/markdown";

const scriptUrl = config.cloudflare.beacon.url || "";

const consentCookieName = "wa-consent";
const declined = "0";
const accepted = "1";

export const AnalyticsConsent = ({ autoAttachScript, className }: { autoAttachScript: boolean, className?: string }) => {
    const [isChecked, setIsChecked] = useState(true);
    useEffect(() => setIsChecked(hasConsented()), []);

    const onDecisionChange = (checked: boolean) => {
        setIsChecked(checked);
        if (checked) {
            onConsent(autoAttachScript);
        } else {
            onAnalyticsConsentDeclined();
        }
    }

    if (analyticsConsentDecisionMade()) {
        return <Switch checked={isChecked} onCheckedChange={onDecisionChange} className={className} />;
    } else {
        return <GenericInfoBox Icon={Cookie} infoText={markdownContent.hint.missingConsentDecision} />
    }
};

export const handleAnalyticsScriptAttachment = () => {
    if (hasConsented()) {
        attachScript();
    }
}

export const onAnalyticsConsentDeclined = () => {
    updateDecision(declined);
    detachScript();
};

export const onAnalyticsConsentGiven = () => onConsent(true);
export const analyticsConsentDecisionMade = () => hasCookie(consentCookieName)

const onConsent = (autoAttachScript: boolean) => {
    updateDecision(accepted);
    if (autoAttachScript) {
        attachScript();
    }
};

const updateDecision = (decision: string) => {
    const now = new Date();
    const oneYearFromNow = new Date(now.setFullYear(now.getFullYear() + 1)); // 1 year from now

    setCookie(consentCookieName, decision, { secure: true, maxAge: Math.floor(oneYearFromNow.getTime() / 1000) })
}

const hasConsented = () => {
    return getCookie(consentCookieName) === accepted
}

const attachScript = () => {
    if (findAnalyticsScript()) {
        return; // Ensure the script is not added multiple times
    }

    // Example (from Cloudflare): <script defer src='https://static.cloudflareinsights.com/beacon.min.js' data-cf-beacon='{"token": "xyz"}'></script>
    const beaconJSON = JSON.stringify({ token: config.cloudflare.beacon.token });
    const script = document.createElement("script");

    script.src = scriptUrl;
    script.defer = true;
    script.setAttribute("data-cf-beacon", beaconJSON)

    document.body.appendChild(script);
};

const detachScript = () => {
    const script = findAnalyticsScript();
    if (script) {
        document.body.removeChild(script);
    }
};

const findAnalyticsScript = () => {
    return document.querySelector(`script[src="${scriptUrl}"]`);
}

