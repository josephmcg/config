# prettier-config <a href="https://npm.im/@josephmcg/prettier-config"><img src="https://badgen.net/npm/v/@josephmcg/prettier-config"></a> <a href="https://npm.im/@josephmcg/prettier-config"><img src="https://badgen.net/npm/dm/@josephmcg/prettier-config"></a> <a href="https://packagephobia.now.sh/result?p=@josephmcg/prettier-config"><img src="https://packagephobia.now.sh/badge?p=@josephmcg/prettier-config"></a>

```bash
pnpm i -D @josephmcg/prettier-config
```

```ts
// prettier.config.mjs
import { baseConfig } from '@josephmcg/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,
  // additional config
}

export default config
```
