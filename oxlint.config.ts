import { defineConfig } from "oxlint";
import mylesOxlintConfig from "@mylesb/oxlint-config";

export default defineConfig({
  extends: [mylesOxlintConfig],
  rules: {
    "no-console": "off",
  },
});
