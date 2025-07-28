import { config } from "@/config";

import Link from "next/link";

import { BlogPostPreviewGrid } from "@/components/blog/BlogPostPreviewGrid";
import { PageContentPagination } from "@/components/page/content/PageContentPagination";

import { BlogPostCache, CachedPost } from "@/lib/blog-post-cache";
import { BLOG_BASE_PATH } from "@/lib/constants";
import { calculateTotalPages, toPagination } from "@/lib/utils";

export async function LatestBlogPosts({ posts, postLimit, page, title, additionalPath = "" }: { posts?: CachedPost[], postLimit: number, page?: number, title?: string, additionalPath?: string }) {
  const blogPosts = posts || await BlogPostCache.getAllPosts();
  if (!blogPosts || blogPosts.length === 0) {
    return <div>No blog posts found</div>;
  }

  if (blogPosts.length < 1) {
    console.warn(`Expected at least 3 blog posts from the blog ${config.wisp.blogId}, but found only ${blogPosts.length}`);
    return <div>An error occurred while displaying the blog posts</div>;
  }

  return (
    <section className="px-16 mt-32">
      {title &&
        <h2 className="h-20 text-6xl font-semi-bold text-center mb-8">{title}</h2>
      }
      <BlogPostPreviewGrid posts={blogPosts.slice(0, postLimit)} tileMaxWidth={96} />
      <div className="text-xs tracking-tighter text-muted-foreground lg:block text-center opacity-50 md:mb-20 mb-8">
        <Link href={`https://wisp.blog/?utm_source=web&utm_campaign=${config.baseUrl}`}>
          Blog powered by wisp
        </Link>
      </div>
      {page &&
        <PageContentPagination pagePath={`/${BLOG_BASE_PATH}${additionalPath}`} pagination={toPagination(page, postLimit, calculateTotalPages(blogPosts.length, postLimit))} />
      }
    </section>
  );
}