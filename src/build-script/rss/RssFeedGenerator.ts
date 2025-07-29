import { config } from "@/config";

import RSS from "rss";
import urlJoin from "url-join";

import { BLOG_BASE_PATH } from "@/lib/constants";
import { wisp } from "@/lib/utils";

const baseUrl = config.baseUrl;

async function generateFeedXml(): Promise<string> {
  const result = await wisp.getPosts({ limit: 20 });

  const posts = result.posts.map((post) => {
    return {
      title: post.title,
      description: post.description || "",
      url: urlJoin(baseUrl, `/${BLOG_BASE_PATH}/${post.slug}`),
      date: post.publishedAt || new Date(),
    };
  });

  const feed = new RSS({
    title: config.website.name,
    description: "Empowering Your Tech Journey: Discover Tutorials and Insights on Technologies",
    site_url: baseUrl,
    feed_url: urlJoin(baseUrl, "/feeds/blog.xml"),
    pubDate: new Date(),
  });
  posts.forEach((post) => {
    feed.item(post);
  });

  return feed.xml({ indent: true });
}

export const RssFeedGenerator = {
  generateFeedXml: generateFeedXml
}