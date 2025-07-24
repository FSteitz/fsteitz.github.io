import { formatDate } from "date-fns";
import { de } from 'date-fns/locale';
import sanitize, { defaults } from "sanitize-html";

const PostContent = ({ content }: { content: string }) => {
  const sanitizedContent = sanitize(content, {
    allowedTags: [
      "b",
      "br",
      "i",
      "em",
      "strong",
      "a",
      "img",
      "h1",
      "h2",
      "h3",
      "code",
      "pre",
      "p",
      "li",
      "ul",
      "ol",
      "blockquote",
      // tables
      "td",
      "th",
      "table",
      "tr",
      "tbody",
      "thead",
      "tfoot",
      "small",
      "div",
      "iframe",
    ],
    allowedAttributes: {
      ...defaults.allowedAttributes,
      "*": ["style"],
      iframe: ["src", "allowfullscreen", "style"],
    },
    allowedIframeHostnames: ["www.youtube.com", "www.youtube-nocookie.com"],
  });
  return (
    <div className="blog-content mx-auto" dangerouslySetInnerHTML={{ __html: sanitizedContent }} />
  );
};

export const BlogPostContent = ({ content, createdAt, publishedAt }: { content: string, createdAt: Date, publishedAt: Date | null }) => {
  return (
    <>
      <div className="max-w-[80%] prose lg:prose-xl dark:prose-invert mx-auto lg:prose-h1:text-4xl mb-10 lg:mt-20 break-words px-3">
        <PostContent content={content} />
        <div className="text-sm mt-8">
          Published at {formatDate(publishedAt || createdAt, "dd. MMMM yyyy", { locale: de })}
        </div>
      </div>
    </>
  );
};
