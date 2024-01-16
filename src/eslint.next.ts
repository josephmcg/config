import { Linter } from 'eslint'

import rules from './shared.react'

const config: Linter.Config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
    'next/core-web-vitals',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'prettier',
  ],
  rules,
}

export default config
