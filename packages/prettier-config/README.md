# prettier-config [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Fprettier-config)](https://www.npmjs.com/package/@josephmcg/prettier-config)

```bash
pnpm i -D @josephmcg/prettier-config
```

```ts
// .prettierrc.mjs
import { baseConfig, tailwindConfig } from '@josephmcg/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,
  ...tailwindConfig,
  // additional config
}

export default config
```
