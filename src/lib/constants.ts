import { config } from "@/config";

export const PAGE_PATH_PART = "/page/"

export const TAG_PATH_PART = "/tag"

export const BLOG_BASE_PATH = "blog";
export const BLOG_PAGE_BASE_PATH = BLOG_BASE_PATH + PAGE_PATH_PART;
export const BLOG_TAG_BASE_PATH = BLOG_BASE_PATH + TAG_PATH_PART;

export const TOOLS_BASE_PATH = "tools";

export const KOTLIN_PLAYGROUND_BASE_PATH = "kotlin/playground";

export const ABOUT_ME_BASE_PATH = "about-me";

export const IMPRINT_BASE_PATH = "imprint";

export const PRIVACY_POLICY_BASE_PATH = "privacy-policy"
export const PRIVACY_SETTINGS_BASE_PATH = "privacy-settings"

export const FLOMIT_BASE_PATH = "flomit"

export const BLOG_POSTS_PER_PAGE = 8;

export const LOCALE = "en_US";

export const IMG_OG_WIDTH = "1024";
export const IMG_OG_HEIGHT = "576";
export const IMG_OG_BASE_PATH = `${config.baseUrl}/og-img`;
export const IMG_OG_DEFAULT = { url: `${IMG_OG_BASE_PATH}/default.webp`, width: IMG_OG_WIDTH, height: IMG_OG_HEIGHT };
export const IMG_OG_BLOG = { url: `${IMG_OG_BASE_PATH}/blog.webp`, width: IMG_OG_WIDTH, height: IMG_OG_HEIGHT };
export const IMG_OG_TOOLS = { url: `${IMG_OG_BASE_PATH}/tools.webp`, width: IMG_OG_WIDTH, height: IMG_OG_HEIGHT };
export const IMG_OG_ABOUT_ME = { url: `${IMG_OG_BASE_PATH}/about-me.webp`, width: IMG_OG_WIDTH, height: IMG_OG_HEIGHT };