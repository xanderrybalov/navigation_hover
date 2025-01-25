import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    vitePreprocess(),
    ({
      typescript: true,
      scss: true,
      postcss: true,
    }),
  ],

  kit: {
    adapter: adapter(),
  },
};

export default config;
