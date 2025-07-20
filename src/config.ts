const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  const name = process.env.NEXT_PUBLIC_DISPLAY_NAME;
  const copyright = process.env.NEXT_PUBLIC_COPYRIGHT;
  const cloudflareBeaconUrl = process.env.NEXT_PUBLIC_CLOUDFLARE_BEACON_URL;
  const cloudflareBeaconToken = process.env.NEXT_PUBLIC_CLOUDFLARE_BEACON_TOKEN;

  const missingEnvironmentVariable = "ENV_VAR_MISSING";

  return {
    baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000",
    website: {
      name: name || missingEnvironmentVariable,
      copyright
    },
    wisp: {
      blogId: blogId || missingEnvironmentVariable,
    },
    cloudflare: {
      beacon: {
        url: cloudflareBeaconUrl,
        token: cloudflareBeaconToken
      }
    }
  };
};

export const config = buildConfig();
