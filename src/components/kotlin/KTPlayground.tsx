"use client"

import { useEffect, useState } from "react";

import { KTPlaygroundProperties } from "@/components/kotlin/KTPlaygroundProperties";

export default function KTPlayground(properties: KTPlaygroundProperties) {
    const [id, setId] = useState("my-id");

    useEffect(() => {
        setId(properties.uniqueSelector);
        const loadPlayground = async () => {
            const selector = `.${id}`;
            const playground = await import('kotlin-playground');
            playground(selector);
        };

        // Defer import for SSR purposes
        loadPlayground();
    }, [id, properties.uniqueSelector]);

    return (
        <div>
            <code
                className={id}
                data-shorter-height={properties.shorterHeight}
                data-highlight-only={properties.highlightOnly}
                match-brackets={properties.matchBrackets && properties.matchBrackets.toString()}
                data-output-height={properties.outputHeight}
                data-autocomplete={properties.autoComplete}
                highlight-on-fly={properties.onFlyHighlight}
                data-target-platform={properties.platform}
                folded-button={properties.foldedButton}
                auto-indent={properties.autoIndent}
                data-crosslink={properties.crosslink}
                data-scrollbar-style={properties.scrollbarString}>
                {properties.code}
            </code>
        </div>
    )
};