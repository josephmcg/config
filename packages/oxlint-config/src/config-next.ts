import { defineConfig } from 'oxlint'

import { josephmcgOxlintConfigReact } from './config-react'

export const josephmcgOxlintConfigNext = defineConfig({
  extends: [josephmcgOxlintConfigReact],
  plugins: ['nextjs'],
  rules: {
    'nextjs/no-img-element': 'off', // Wait until image transforms are done
  },
})
