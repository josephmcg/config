import { Linter } from "eslint";

const config: Linter.Config = {
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:unicorn/recommended",
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    "prettier",
  ],
  settings: {},
  rules: {
    "react/prop-types": 0, // use zod if you need runtime validation
    "@typescript-eslint/naming-convention": [
      "error",
      {
        selector: "enum",
        format: ["PascalCase"],
      },
    ],
    "unused-imports/no-unused-imports-ts": "error",
    "unicorn/no-abusive-eslint-disable": 0,
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
};

export default config;
