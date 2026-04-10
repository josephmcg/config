import type { OxfmtConfig } from 'oxfmt'

export const josephmcgOxfmtConfig = {
  arrowParens: 'always',
  ignorePatterns: [
    '.changeset',
    '.turbo',
    'dist',
    'node_modules',
    'CODEOWNERS',
    'CHANGELOG.md',
    'pnpm-lock.yaml',
  ],
  jsxSingleQuote: false,
  printWidth: 100,
  semi: false,
  singleQuote: true,
  sortImports: {
    groups: [
      'type-import',
      ['value-builtin', 'value-external'],
      'type-internal',
      'value-internal',
      ['type-parent', 'type-sibling', 'type-index'],
      ['value-parent', 'value-sibling', 'value-index'],
      'unknown',
    ],
  },
  sortPackageJson: true,
  tabWidth: 2,
  trailingComma: 'all',
} as const satisfies OxfmtConfig
