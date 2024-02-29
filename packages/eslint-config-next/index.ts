import { Linter } from 'eslint'

import shared from '../../shared/eslint-react'

const config = {
  ...shared,
  extends: [
    ...shared.extends,
    'next/core-web-vitals',
    // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
    // Make sure it's always the last config, so it gets the chance to override other configs.
    'prettier',
  ],
} as const satisfies Linter.Config

export default config
