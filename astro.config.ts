import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";
import config from "./src/config";

export default defineConfig({
  site: config.SITE_URL,
  vite: {
    plugins: [tailwindcss()],
  },
});
