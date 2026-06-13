import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  integrations: [
    sitemap({
      serialize(item) {
        item.url = item.url.replace(/\/$/, "");
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
