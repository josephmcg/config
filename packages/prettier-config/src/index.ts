import type { Options } from 'prettier'

const config = {
  arrowParens: 'always',
  printWidth: 100,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
  trailingComma: 'all',
  tabWidth: 2,
} as const satisfies Options

export default config
