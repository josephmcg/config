# @josephmcg/config

[![npm version](https://badge.fury.io/js/@josephmcg%2Fconfig.svg)](https://badge.fury.io/js/@josephmcg%2Fconfig)

## Usage

Install @josephmcg/config:

```bash
pnpm i -D @josephmcg/config
```

Import the config in your project:

### prettier.mjs

```ts
import { prettierConfig } from '@josephmcg/config'

/** @type {import("prettier").Config} */
const config = {
  ...prettierConfig,
  // your additional rules
}

export default config
```

### .eslintrc.cjs

```ts
const eslintReact = require('@josephmcg/config').eslintReact
const eslintNext = require('@josephmcg/config').eslintNext

/** @type {import("eslint").Linter.Config} */
module.exports = {
  ...eslintReact,
  // your additional rules
}

module.exports = {
  ...eslintNext,
  // your additional rules
}
```
