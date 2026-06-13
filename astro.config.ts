import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import { SITE_URL } from "./src/consts";

// https://astro.build/config
export default defineConfig({
  // TODO: Update this with the URL of the website.
  site: SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
