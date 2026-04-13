# @josephmcg/oxlint-config &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Foxlint-config)](https://www.npmjs.com/package/@josephmcg/oxlint-config)

```bash
pnpm i -D @josephmcg/oxlint-config
```

```ts
// oxlint.config.ts
import { defineConfig } from 'oxlint'
import { josephmcgoxlintConfig } from '@josephmcg/oxlint-config'

export default defineConfig({
  ...josephmcgoxlintConfig,
  // additional config
})
```
