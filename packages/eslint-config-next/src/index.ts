import configReact from '@josephmcg/eslint-config-react'
import nextPlugin from '@next/eslint-plugin-next'
import type { Linter } from 'eslint'
/**
 * Next.js specific eslint config
 */
const config: Linter.Config[] = [
  ...configReact,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@next/next': nextPlugin,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
    },
  },
]

export default config
