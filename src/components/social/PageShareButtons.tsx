"use client"

import { RiShare2Line } from "react-icons/ri";

import {
    BlueskyIcon,
    BlueskyShareButton,
    FacebookIcon,
    FacebookShareButton,
    ThreadsIcon,
    ThreadsShareButton,
    TwitterIcon,
    TwitterShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from "react-share";

export const PageShareButtons = ({ shareUrl, title, tagNames }: { shareUrl: string, title: string, tagNames?: string[] }) => {
    const firstHashtag = tagNames && tagNames.length > 0 ? tagNames[0] : undefined;
    const shareButtonStyle = canBeSharedNatively(shareUrl, title) ? undefined : "hidden";
    const iconSize = 32;

    return (
        <section className="max-w-[80%] mx-auto mt-16 px-3">
            <h2 className="mb-6 text-2xl font-bold">Share</h2>
            <div className="flex flex-row justify-between">
                <button className={shareButtonStyle} onClick={() => onShare(shareUrl, title)}>
                    <RiShare2Line size={32} />
                </button>
                <div className="grid grid-cols-5 w-56">
                    <WhatsappShareButton url={shareUrl} title={title}>
                        <WhatsappIcon size={iconSize} />
                    </WhatsappShareButton>
                    <TwitterShareButton url={shareUrl} title={title} hashtags={tagNames}>
                        <TwitterIcon size={iconSize} />
                    </TwitterShareButton>
                    <BlueskyShareButton url={shareUrl} title={title}>
                        <BlueskyIcon size={iconSize} />
                    </BlueskyShareButton>
                    <ThreadsShareButton url={shareUrl} title={title} hashtags={tagNames}>
                        <ThreadsIcon size={iconSize} />
                    </ThreadsShareButton>
                    <FacebookShareButton url={shareUrl} title={title} hashtag={"#" + firstHashtag}>
                        <FacebookIcon size={iconSize} />
                    </FacebookShareButton>
                </div>
            </div>
        </section>
    );
};

function canBeSharedNatively(shareUrl: string, title: string) {
    try {
        const canShare = navigator.canShare({
            url: shareUrl,
            title: title
        });

        if (!canShare) {
            console.log("Web Share API is not supported");
        }

        return canShare;
    }
    catch (error) {
        console.warn("Web Share API error (canShare): ", error);
        return false;
    }
}

async function onShare(shareUrl: string, title: string) {
    try {
        await navigator.share({
            title: title,
            url: shareUrl,
        });
    } catch (error) {
        console.warn("Web Share API error (share): ", error);
    }
};
