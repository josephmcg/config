import { defineConfig } from 'oxlint'

import { josephmcgOxlintConfigBase } from './packages/oxlint-config/src/config-base.ts'

const config = defineConfig({
  extends: [josephmcgOxlintConfigBase],
  ignorePatterns: [
    'packages/eslint-config-react/src/index.ts',
    'packages/eslint-config-next/src/index.ts',
    'packages/prettier-config/src/index.ts',
  ],
})

export default config
