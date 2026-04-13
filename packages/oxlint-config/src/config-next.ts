import { defineConfig } from 'oxlint'

import { baseRestrictedImportPaths } from './config-base'
import { josephmcgOxlintConfigReact } from './config-react'

/**
 * `no-restricted-imports` paths config to ensure i18n navigation helpers are being used.
 * Also includes zod tree-shaking paths from the base config.
 * @see https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-imports.html
 */
export const nextRestrictedImportPaths = [
  ...baseRestrictedImportPaths,
  {
    name: 'next/link',
    message: 'Please import from `@/i18n/navigation` instead.',
  },
  {
    name: 'next/navigation',
    importNames: ['redirect', 'permanentRedirect', 'useRouter', 'usePathname'],
    message: 'Please import from `@/i18n/navigation` instead.',
  },
] as const

export const josephmcgOxlintConfigNext = defineConfig({
  extends: [josephmcgOxlintConfigReact],
  plugins: ['nextjs'],
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [...nextRestrictedImportPaths],
      },
    ],

    'nextjs/no-img-element': 'off', // Leads to heavy compute without an image optimization service
  },
})
