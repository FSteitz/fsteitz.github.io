import Image from "next/image";
import Link from "next/link";

import { formatDate } from "date-fns";
import { de } from 'date-fns/locale';

import { BLOG_BASE_PATH, BLOG_TAG_BASE_PATH } from "@/lib/constants";
import { cn } from "@/lib/utils";

import { CachedPost } from "@/lib/blog-post-cache";

export const BlogPostPreview = ({ post, className }: { post: CachedPost, className?: string }) => {
  return (
    <div className={cn(`break-words 2xl:min-w-152`, className)}>
      <Link href={`/${BLOG_BASE_PATH}/${post.slug}`}>
        <div className="aspect-[16/9] relative">
          <Image
            alt={post.title}
            className="object-cover rounded-2xl border-8 shadow-md shadow-sky-950 transition-transform transform hover:scale-105"
            src={post.image || "/images/placeholder.webp"}
            fill
          />
        </div>
      </Link>
      <div className="grid grid-cols-1 gap-3 md:col-span-2 pt-6 px-2">
        <h2 className={cn("font-sans font-bold text-primary line-clamp-2 h-8 text-lg lg:text-xl xl:text-3xl xl:h-20")}>
          <Link href={`/${BLOG_BASE_PATH}/${post.slug}`} className="transition-colors hover:text-sky-600">{post.title}</Link>
        </h2>
        <div className={cn("prose leading-relaxed line-clamp-4 dark:prose-invert h-[5rem] xl:prose-lg text-sm md:text-md xl:text-lg xl:h-[5.5rem]")}>
          {post.description}
        </div>
        <div className={cn("text-sm line-clamp-1")}>
          {post.tags.map((tag) => (
            <div key={tag.id} className="mr-2 inline-block">
              <Link href={`/${BLOG_TAG_BASE_PATH}/${tag.name}`} className="transition-colors hover:text-sky-600">#{tag.name}</Link>
            </div>
          ))}
        </div>
        <div className="prose tracking-tighter text-muted-foreground text-sm">
          {formatDate(post.publishedAt || post.updatedAt, "dd. MMMM yyyy", { locale: de })}
        </div>
      </div>
    </div>
  );
};