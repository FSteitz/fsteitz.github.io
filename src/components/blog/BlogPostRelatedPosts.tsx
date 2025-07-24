import Image from "next/image";
import Link from "next/link";

import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import type { GetRelatedPostsResult } from "@wisp-cms/client";

import { BLOG_BASE_PATH } from "@/lib/constants";

export const BlogPostRelatedPosts = ({ posts }: { posts: GetRelatedPostsResult["posts"] }) => {
  if (posts.length === 0) {
    return null;
  }

  return (
    <div className="max-w-[80%] p-3 mt-12 sm:mt-16 mx-auto">
      <h2 className="mb-6 text-2xl font-bold">Related Posts</h2>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        {posts.slice(0, 3).map((post) => (
          <div className="overflow-hidden shadow-md" key={post.id}>
            <Link href={`/${BLOG_BASE_PATH}/${post.slug}`}>
              <AspectRatio ratio={16 / 9} className="w-full">
                <Image
                  src={post.image || "/images/placeholder.png"}
                  alt={post.title}
                  fill
                  className="h -full min-h-full min-w-full border-8 object-cover object-center"
                />
              </AspectRatio>
            </Link>
            <div className="prose prose-sm dark:prose-invert p-4">
              <h3 className="line-clamp-2 h-14">
                <Link href={`/${BLOG_BASE_PATH}/${post.slug}`} className="not-prose transition-colors hover:text-sky-600">{post.title}</Link>
              </h3>
              <p className="line-clamp-3 h-[4.5rem]">{post.description}</p>
              <Link href={`/${BLOG_BASE_PATH}/${post.slug}`}>
                <strong>Read more</strong>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
