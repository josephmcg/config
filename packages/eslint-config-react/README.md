# eslint-config-react &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) ![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Feslint-config-react)

> [!CAUTION]
> This package is deprecated. I'm switching all projects to [oxlint](https://oxc.rs/docs/guide/usage/linter.html), and would suggest you do the same.

```bash
pnpm i -D @josephmcg/eslint-config-react
```

```mjs
// eslint.config.js
import josephmcgConfigReact from '@josephmcg/eslint-config-react'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const config = defineConfig(josephmcgConfigReact, {
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
      sourceType: 'module',
      tsconfigRootDir: import.meta.dirname,
      warnOnUnsupportedTypeScriptVersion: true,
    },
  },
})
```
