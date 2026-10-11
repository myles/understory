import mylesPrettierConfig from "@mylesb/prettier-config";

// Prettier only formats .astro files, which oxfmt can't parse; oxfmt
// handles everything else (see oxfmt.config.ts). The npm scripts pass
// the "**/*.astro" glob.
/** @type {import("prettier").Config} */
export default {
  ...mylesPrettierConfig,
  plugins: [
    "prettier-plugin-astro",
    "prettier-plugin-tailwindcss",
    // Must come last; see the plugin's README.
    "prettier-plugin-astro-organize-imports",
  ],
  overrides: [
    {
      files: "*.astro",
      options: {
        parser: "astro",
      },
    },
  ],
};
