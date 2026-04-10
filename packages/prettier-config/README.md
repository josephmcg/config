# prettier-config &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Fprettier-config)](https://www.npmjs.com/package/@josephmcg/prettier-config)

> [!CAUTION]
> This package is deprecated. I'm switching all projects to [oxfmt](https://oxc.rs/docs/guide/usage/formatter.html), and would suggest you do the same.

```bash
pnpm i -D @josephmcg/prettier-config
```

```ts
// prettier.config.mjs
import josephmcgConfig from '@josephmcg/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...josephmcgConfig,
  // additional config
}

export default config
```
