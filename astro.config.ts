import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  // TODO: Update this with the URL of the website.
  site: "https://localhost:4321",
  vite: {
    plugins: [tailwindcss()],
  },
});
