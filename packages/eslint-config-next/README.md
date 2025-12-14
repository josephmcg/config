# eslint-config-next <a href="https://npm.im/@josephmcg/eslint-config-next"><img src="https://badgen.net/npm/v/@josephmcg/eslint-config-next"></a> <a href="https://npm.im/@josephmcg/eslint-config-next"><img src="https://badgen.net/npm/dm/@josephmcg/eslint-config-next"></a> <a href="https://packagephobia.now.sh/result?p=@josephmcg/eslint-config-next"><img src="https://packagephobia.now.sh/badge?p=@josephmcg/eslint-config-next"></a>

```bash
pnpm i -D @josephmcg/eslint-config-next
```

```mjs
// eslint.config.js
import josephmcgConfigNext from '@josephmcg/eslint-config-next'
import { defineConfig } from 'eslint/config'
import tseslint from 'typescript-eslint'

const config = defineConfig(josephmcgConfigNext, {
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
