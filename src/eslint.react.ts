import { Linter } from "eslint";

const config: Linter.Config = {
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:unicorn/recommended",
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
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  rules: {
    curly: "error",
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: ["PascalCase"],
      },
    ],
    "@typescript-eslint/no-unused-vars": ["warn", { argsIgnorePattern: "^_" }],
    "react/prop-types": "off", // use zod if you need runtime validation
    "unused-imports/no-unused-imports-ts": "error",
    "unicorn/no-abusive-eslint-disable": "off",
    "unicorn/filename-case": [
      "error",
      {
        cases: { camelCase: true, pascalCase: true, kebabCase: true },
      },
    ],
    "unicorn/prevent-abbreviations": [
      "error",
      {
        ignore: ["\\.*", /^ignore/i],
      },
    ],
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};

export default config;
