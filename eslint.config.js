// @ts-check

import { defineConfig, globalIgnores } from 'eslint/config'
import eslint from '@eslint/js'
import eslintConfigPrettier from 'eslint-config-prettier/flat'

const config = defineConfig(
  globalIgnores(['.*', 'node_modules', 'dist']),
  eslint.configs.recommended,
  // This disables the formatting rules in ESLint that Prettier is going to be responsible for handling.
  // Make sure it's always the last config, so it gets the chance to override other configs.
  eslintConfigPrettier,
)

export default config
