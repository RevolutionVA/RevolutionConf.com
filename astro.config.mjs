import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  // Required for canonical URLs and sitemap generation.
  site: 'https://revolutionconf.com',
  integrations: [tailwind(), sitemap()]
});