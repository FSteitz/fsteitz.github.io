import { config } from "@/config";

import Link from "next/link";

import { FaList } from "react-icons/fa";

import { Rss } from "lucide-react";

import { PagedBlogPostPreviewGrid } from "@/components/blog/PagedBlogPostPreviewGrid";
import { MarkdownProse } from "@/components/markdown/MarkdownProse";
import { PageFrame } from "@/components/page/frame/PageFrame";
import { Button } from "@/components/ui/button";

import { CachedPost } from "@/lib/blog-post-cache";
import { BLOG_POSTS_PER_PAGE, BLOG_TAG_BASE_PATH, TAG_PATH_PART } from "@/lib/constants";
import { replacePagePlaceholders, wisp } from "@/lib/utils";

import { markdownContent } from '@/text/markdown';

export const createPageContent = async (tagName: string, page: number) => {
    const result = await wisp.getPosts({ limit: BLOG_POSTS_PER_PAGE, tags: [tagName], page });
    return (
        <PageFrame pageTitle={`Explore Technology and Software Engineering: Articles Tagged #${tagName}`} infoBox={{ Icon: Rss, infoText: markdownContent.rss.blog }} pageSubTitle={`by ${config.website.name}`}>
            <MarkdownProse markdownContent={replaceTagPlaceholders(replacePagePlaceholders(page, () => markdownContent.page.introduction.blogTag, () => markdownContent.page.introduction.blogTagBeyondPageOne), tagName)} />
            <div className="text-center mb-24">
                <Button variant="secondary" className={`p-5 sm:p-2 h-20 w-72 sm:w-80 shadow-md text-xl sm:text-2xl font-bold mt-10`}>
                    <Link href={`/${BLOG_TAG_BASE_PATH}`} className={`w-full h-full flex flex-row items-center justify-center`}>
                        <FaList className="mr-5 !w-10 !h-10 block" /> Discover All Tags
                    </Link>
                </Button>
            </div>
            <PagedBlogPostPreviewGrid posts={result.posts as CachedPost[]} postLimit={BLOG_POSTS_PER_PAGE} page={page} additionalPath={`${TAG_PATH_PART}/${tagName}`} />
        </PageFrame>
    );
};

const replaceTagPlaceholders = (text: string, tagName: string): string => {
    return text.replace(/__TAG__/g, tagName)
};