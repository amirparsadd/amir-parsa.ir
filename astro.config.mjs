// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig, fontProviders } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), sitemap()],

  fonts: [
      {
          provider: fontProviders.google(),
          name: 'Playpen Sans',
          cssVariable: '--font-playpen-sans',
          fallbacks: ['sans-serif'],
      },
	],

  site: "https://amir-parsa.ir",

  vite: {
    plugins: [tailwindcss()],
  },
});