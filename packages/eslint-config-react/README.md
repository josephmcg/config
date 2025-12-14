# eslint-config-react <a href="https://npm.im/@josephmcg/eslint-config-react"><img src="https://badgen.net/npm/v/@josephmcg/eslint-config-react"></a> <a href="https://npm.im/@josephmcg/eslint-config-react"><img src="https://badgen.net/npm/dm/@josephmcg/eslint-config-react"></a> <a href="https://packagephobia.now.sh/result?p=@josephmcg/eslint-config-react"><img src="https://packagephobia.now.sh/badge?p=@josephmcg/eslint-config-react"></a>

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
      ecmaVersion: 2022,
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
