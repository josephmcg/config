import { Options } from 'prettier'

export const baseConfig = {
  arrowParens: 'always',
  printWidth: 80,
  singleQuote: true,
  jsxSingleQuote: false,
  semi: false,
  trailingComma: 'all',
  tabWidth: 2,
} as const satisfies Options

export const tailwindConfig = {
  ...baseConfig,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindConfig: './tailwind.config.ts',
  tailwindFunctions: ['clsx'],
} as const satisfies Options
