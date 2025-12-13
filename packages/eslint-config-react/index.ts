import { Linter } from "eslint";

// Base config that can be extended by other packages
export const baseConfig = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/strict-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:unicorn/recommended",
  ],
  ignorePatterns: [
    "**/package-lock.json",
    "**/pnpm-lock.yaml",
    "**/node_modules/**",
    "**/dist/**",
    ".next",
  ],
  plugins: [
    "@typescript-eslint",
    "react",
    "jsx-a11y",
    "simple-import-sort",
    "unused-imports",
  ],
  rules: {
    curly: "error",

    // imports
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "unused-imports/no-unused-imports": "error",

    // unicorn overrides
    "unicorn/prevent-abbreviations": "off",

    // React
    "react/prop-types": "off", // Use zod if you need runtime validation

    // TS
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: ["StrictPascalCase"],
      },
      {
        selector: "variable",
        types: ["boolean"],
        format: ["StrictPascalCase"],
        prefix: ["is", "should", "has", "can", "did", "will"],
      },
      {
        selector: "interface",
        format: ["StrictPascalCase"],
      },
      {
        selector: "typeAlias",
        format: ["StrictPascalCase"],
      },
      {
        // Generic type parameter must start with letter T, followed by any uppercase letter
        selector: "typeParameter",
        format: ["PascalCase"],
        custom: { regex: "^T[A-Z]", match: true },
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/no-empty-interface": [
      "error",
      { allowSingleExtends: true },
    ],
  },
} as const satisfies Linter.Config;

const config = {
  ...baseConfig,
  extends: [
    ...baseConfig.extends,
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "prettier",
  ],
  globals: {
    React: "readonly",
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2022,
    // following line required for `plugin:@typescript-eslint/strict-type-checked`
    project: "./tsconfig.json",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
} as const satisfies Linter.Config;

export default config;
