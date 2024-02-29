# @josephmcg/config

[![CI](https://github.com/josephmcg/config/actions/workflows/main.yml/badge.svg)](https://github.com/josephmcg/config/actions/workflows/main.yml)
[![Publish](https://github.com/josephmcg/config/actions/workflows/publish.yml/badge.svg)](https://github.com/josephmcg/config/actions/workflows/publish.yml)

- [@josephmcg/config](#josephmcgconfig)
  - [prettier](#prettier)
  - [eslint](#eslint)
    - [react](#react)
    - [next](#next)
  - [tsconfig](#tsconfig)
    - [react](#react-1)
    - [next](#next-1)
    - [node](#node)

## prettier

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Fprettier-config)](https://www.npmjs.com/package/@josephmcg/prettier-config)

```bash
pnpm i -D @josephmcg/prettier-config
```

.prettierrc.mjs (or any prettier config file that is ESM)

```ts
import { baseConfig, tailwindConfig } from '@josephmcg/prettier-config'

/** @type {import("prettier").Config} */
const config = {
  ...baseConfig || ...tailwindConfig,
  // additional config
}

export default config
```

## eslint

.eslintrc.cjs (eslint only supports cjs for now, I will switch to ESM when I can)

### react

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Feslint-config-react)](https://www.npmjs.com/package/@josephmcg/eslint-config-react)

```bash
pnpm i -D @josephmcg/eslint-config-react
```

```ts
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: '@josephmcg/eslint-config-react',
  // additional config
}
```

### next

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Feslint-config-next)](https://www.npmjs.com/package/@josephmcg/eslint-config-next)

```bash
pnpm i -D @josephmcg/eslint-config-next
```

```ts
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: '@josephmcg/eslint-config-next',
  // additional config
}
```

## tsconfig

[![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Ftsconfig)](https://www.npmjs.com/package/@josephmcg/tsconfig)

```bash
pnpm i -D @josephmcg/tsconfig
```

tsconfig.json

### react

```json
{
  "extends": "@josephmcg/tsconfig/react.json"
}
```

### next

```json
{
  "extends": "@josephmcg/tsconfig/next.json"
}
```

### node

```json
{
  "extends": "@josephmcg/tsconfig/node.json"
}
```
