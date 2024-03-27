# eslint-config-next [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Feslint-config-next)](https://www.npmjs.com/package/@josephmcg/eslint-config-next)

> <https://github.com/eslint/eslint/issues/18093>  
> eslint flat config is not supported by all plugins, I will switch when I can

```bash
pnpm i -D @josephmcg/eslint-config-next
```

```cjs
// .eslintrc.cjs
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: '@josephmcg/eslint-config-next',
  // additional config
}
```
