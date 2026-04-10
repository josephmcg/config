import type { Linter } from 'eslint'

import configReact from '@josephmcg/eslint-config-react'
import nextPlugin from '@next/eslint-plugin-next'

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
