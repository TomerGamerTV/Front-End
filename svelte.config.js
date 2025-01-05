import adapter from '@sveltejs/adapter-cloudflare'; // or adapter-auto
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),

  kit: {
    adapter: adapter(),
    // This tells SvelteKit where to output build files
    files: {
      assets: 'public',  // Ensure this is set correctly
    },
  },
};

export default config;
