import { BlogPostPreview } from "@/components/blog/BlogPostPreview";

import { CachedPost } from "@/lib/blog-post-cache";
import { cn } from "@/lib/utils";

export const BlogPostPreviewGrid = ({ posts, tileMaxWidth: tileMaxWidth }: { posts: CachedPost[], tileMaxWidth?: number }) => {
    const tileMaxWidthStyle = tileMaxWidth ? `max-w-${tileMaxWidth}` : undefined
    return (
        <div className={cn("grid grid-cols-1 justify-items-center gap-10 lg:grid-cols-2 lg:gap-12 2xl:gap-28 md:mt-16 mt-8 mb-8 2xl:px-0")}>
            {posts.map(post => <BlogPostPreview key={post.id} post={post} className={`${tileMaxWidthStyle} mb-8`} />)}
        </div>
    );
};
