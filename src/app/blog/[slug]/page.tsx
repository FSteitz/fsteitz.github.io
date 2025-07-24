import { config } from "@/config";

import { notFound } from "next/navigation";

import { Rss } from "lucide-react";
import type { BlogPosting, WithContext } from "schema-dts";

import { BlogPostContent } from "@/components/blog/BlogPostContent";
import { BlogPostRelatedPosts } from "@/components/blog/BlogPostRelatedPosts";
import { BlogPostTags } from "@/components/blog/BlogPostTags";
import { PageShareButtons } from "@/components/social/PageShareButtons";

import { BlogPostCache } from "@/lib/blog-post-cache";
import { BLOG_BASE_PATH } from "@/lib/constants";
import { SlugPathParam } from "@/lib/types";
import { wisp } from "@/lib/utils";

import { PageFrame } from "@/components/page/frame/PageFrame";
import { markdownContent } from "@/text/markdown";

export async function generateMetadata(props: { params: Promise<SlugPathParam> }) {
  const params = await props.params;
  const { slug } = params;

  const post = await BlogPostCache.findBySlug(slug);
  if (!post) {
    return {
      title: "Blog post not found!",
    };
  }

  const { title, description, image } = post;
  return {
    title,
    description,
    alternates: {
      canonical: `${config.baseUrl}/${BLOG_BASE_PATH}/${slug}`
    },
    openGraph: {
      title,
      description,
      images: [image]
    }
  };
}

export async function generateStaticParams(): Promise<SlugPathParam[]> {
  const posts = await BlogPostCache.getAllPosts();
  return posts.map((post) => ({
    slug: post.slug
  }));
}

export default async function BlogPost(props: { params: Promise<SlugPathParam> }) {
  const params = await props.params;
  const { slug } = params;

  const post = await BlogPostCache.findBySlug(slug);
  const { posts } = await wisp.getRelatedPosts({ slug, limit: 3 });

  if (!post) {
    return notFound();
  }

  const { title, content, createdAt, publishedAt, updatedAt, image, author, tags } = post;

  const jsonLd: WithContext<BlogPosting> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    image: image ? image : undefined,
    datePublished: publishedAt ? publishedAt.toString() : undefined,
    dateModified: updatedAt.toString(),
    author: {
      "@type": "Person",
      name: author.name ?? undefined,
      image: author.image ?? undefined,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PageFrame pageTitle={title} infoBox={{ Icon: Rss, infoText: markdownContent.rss.blog }}>
        <BlogPostContent content={content} createdAt={createdAt} publishedAt={publishedAt} />
        <PageShareButtons shareUrl={`${config.baseUrl}/${BLOG_BASE_PATH}/${slug}`} title={title} tagNames={tags.map(tag => tag.name)} />
        <BlogPostTags tags={tags} />
        <BlogPostRelatedPosts posts={posts} />
      </PageFrame>
    </>
  );
};