import { Linter } from 'eslint'

import shared from '../../shared/eslint-react'

const config: Linter.Config = {
  ...shared,
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:unicorn/recommended',
    'next/core-web-vitals',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'prettier',
  ],
}

export default config
