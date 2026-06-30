import { defineConfig, type OxlintConfig } from 'oxlint'

import { josephmcgOxlintConfigBase } from './packages/oxlint-config/src/config-base.ts'

const config = defineConfig({
  extends: [josephmcgOxlintConfigBase],
} satisfies OxlintConfig)

export default config
