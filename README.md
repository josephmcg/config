# @josephmcg/config

[![CI](https://github.com/josephmcg/config/actions/workflows/main.yml/badge.svg)](https://github.com/josephmcg/config/actions/workflows/main.yml)
[![Publish](https://github.com/josephmcg/config/actions/workflows/publish.yml/badge.svg)](https://github.com/josephmcg/config/actions/workflows/publish.yml)

## Usage

Import the specific package you are interested in and configure accordingly:

### prettier

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Fprettier-config)](https://www.npmjs.com/package/@josephmcg/prettier-config)

```bash
pnpm i -D @josephmcg/prettier-config
```

.prettierrc.mjs (or any prettier config file that is ESM)

```ts
import baseConfig from '@josephmcg/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig,
  // your additional rules
}

export default config
```

### eslint

.eslintrc.cjs (eslint only supports cjs for now, I will switch to ESM when I can)

#### next

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Feslint-config-next)](https://www.npmjs.com/package/@josephmcg/eslint-config-next)

```bash
pnpm i -D @josephmcg/eslint-config-next
```

```ts
const baseConfig = require('@josephmcg/eslint-config-next').default

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  // your additional rules
}
```

#### react

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Feslint-config-react)](https://www.npmjs.com/package/@josephmcg/eslint-config-react)

```bash
pnpm i -D @josephmcg/eslint-config-react
```

```ts
const baseConfig = require('@josephmcg/eslint-config-react').default

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...baseConfig,
  // your additional rules
}
```
