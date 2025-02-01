import adapter from "@sveltejs/adapter-cloudflare-workers";

export default {
  kit: {
    adapter: adapter({
      config: "wrangler.toml",
      platformProxy: {
        configPath: "wrangler.toml",
        environment: "production",
        experimentalJsonConfig: false,
        persist: false,
      },
    }),
  },
};
