# eslint-config-react <a href="https://npm.im/@josephmcg/eslint-config-react"><img src="https://badgen.net/npm/v/@josephmcg/eslint-config-react"></a> <a href="https://npm.im/@josephmcg/eslint-config-react"><img src="https://badgen.net/npm/dm/@josephmcg/eslint-config-react"></a> <a href="https://packagephobia.now.sh/result?p=@josephmcg/eslint-config-react"><img src="https://packagephobia.now.sh/badge?p=@josephmcg/eslint-config-react"></a>

> [!NOTE]  
> <https://github.com/eslint/eslint/issues/18093>  
> eslint flat config is not supported by all plugins, I will switch when I can

```bash
pnpm i -D @josephmcg/eslint-config-react
```

```cjs
// .eslintrc.cjs
/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: '@josephmcg/eslint-config-react',
  // additional config
}
```
