# @josephmcg/oxfmt-config &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Foxfmt-config)](https://www.npmjs.com/package/@josephmcg/oxfmt-config)

```bash
pnpm i -D @josephmcg/oxfmt-config
```

```ts
// oxfmt.config.ts
import { defineConfig } from 'oxfmt'
import { josephmcgOxfmtConfig } from '@josephmcg/oxfmt-config'

export default defineConfig({
  ...josephmcgOxfmtConfig,
  // additional config
})
```
