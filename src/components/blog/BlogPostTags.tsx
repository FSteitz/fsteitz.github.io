import Link from "next/link"

import { TagInPost } from "@wisp-cms/client"

import { BLOG_TAG_BASE_PATH } from "@/lib/constants"

export const BlogPostTags = ({ tags }: { tags: TagInPost[] }) => {
    return (
        <section className="max-w-[80%] mx-auto mt-16 px-3">
            <h2 className="not-prose mt-16 mb-4 text-2xl font-bold text-primary">Tags</h2>
            <div className="text-md lg:text-lg">
                {tags.map((tag) => (
                    <Link
                        key={tag.id}
                        href={`/${BLOG_TAG_BASE_PATH}/${tag.name}`}
                        className="text-primary mr-2 transition-colors hover:text-sky-600">
                        #{tag.name}
                    </Link>
                ))}
            </div>
        </section>
    )
}