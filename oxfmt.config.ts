import mylesOxfmtConfig from "@mylesb/oxfmt-config";
import { defineConfig } from "oxfmt";

// oxfmt can't parse .astro files; Prettier formats those instead, see
// prettier.config.mjs.
export default defineConfig({
  ...mylesOxfmtConfig,
  sortTailwindcss: {
    stylesheet: "./src/styles/global.css",
  },
});
