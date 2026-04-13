import { defineConfig } from 'oxlint'

import { josephmcgOxlintConfigBase } from './packages/oxlint-config/src/config-base.ts'

const config = defineConfig({
  extends: [josephmcgOxlintConfigBase],
  plugins: ['node'],
  ignorePatterns: [
    'packages/eslint-config-react/src/index.ts',
    'packages/eslint-config-next/src/index.ts',
    'packages/prettier-config/src/index.ts',
  ],
  overrides: [
    {
      env: {
        browser: true,
      },
      files: ['*.test.ts'],
      plugins: ['vitest'],
      rules: {
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-strict-boolean-matchers': 'error',
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/require-test-timeout': 'off',
      },
    },
  ],
})

export default config
