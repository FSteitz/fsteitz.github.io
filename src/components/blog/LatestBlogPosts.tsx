import { config } from "@/config";

import { BlogPostPreviewGrid } from "@/components/blog/BlogPostPreviewGrid";

import { BlogPostCache } from "@/lib/blog-post-cache";

export async function LatestBlogPosts({ postLimit, title }: { postLimit: number, title?: string }) {
  const posts = await BlogPostCache.getAllPosts();
  if (!posts || posts.length === 0) {
    return <div>No blog posts found</div>;
  }

  if (posts.length < 3) {
    console.warn(`Expected at least 3 blog posts from the blog ${config.wisp.blogId}, but found only ${posts.length}`);
    return <div>An error occurred while displaying the blog posts</div>;
  }

  return (
    <section className="px-16 mt-32">
      {title &&
        <h2 className="h-20 text-6xl font-semi-bold text-center mb-8">{title}</h2>
      }
      <BlogPostPreviewGrid posts={posts.slice(0, postLimit)} tileMaxWidth={96} />
    </section>
  );
}