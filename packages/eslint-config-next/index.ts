import { Linter } from "eslint";

import { baseConfig } from "@josephmcg/eslint-config-react";

const config = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    "next/core-web-vitals",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "prettier",
  ],
  overrides: [
    {
      files: ["**/*.*ts?(x)"],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        // following line required for `plugin:@typescript-eslint/strict-type-checked`
        project: "./tsconfig.json",
        sourceType: "module",
        warnOnUnsupportedTypeScriptVersion: true,
      },
    },
  ],
} as const satisfies Linter.Config;

export default config;
