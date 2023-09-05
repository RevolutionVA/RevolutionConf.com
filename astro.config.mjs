import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "RevolutionConf",
  url: "https://revolutionconf.com",
  integrations: [tailwind()]
});