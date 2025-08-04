"use client"

import { useEffect, useState } from "react";

import { analyticsConsentDecisionMade, handleAnalyticsScriptAttachment, onAnalyticsConsentDeclined, onAnalyticsConsentGiven } from "@/components/consent/AnalyticsConsent";
import { CookieConsent } from "@/components/ui/cookie-consent";

import { IMPRINT_BASE_PATH, PRIVACY_POLICY_BASE_PATH } from "@/lib/constants";

import { markdownContent } from "@/text/markdown";

const CookieConsentPopup = () => {
    const [isMounted, setIsMounted] = useState(false);
    useEffect(() => setIsMounted(true), []);

    if (!isMounted) {
        return null; // Prevent rendering on the server
    }

    handleAnalyticsScriptAttachment();

    return (
        <CookieConsent
            description={markdownContent.hint.cookieConsent}
            cookiePolicyPath="#"
            privacyPolicyPath={`/${PRIVACY_POLICY_BASE_PATH}`}
            imprintPath={`/${IMPRINT_BASE_PATH}`}
            consentDecisionMade={analyticsConsentDecisionMade}
            onDecline={onAnalyticsConsentDeclined}
            onAccept={onAnalyticsConsentGiven}
        />
    );
};

export default CookieConsentPopup;