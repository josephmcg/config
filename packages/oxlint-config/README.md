# @josephmcg/oxlint-config &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/josephmcg/config/blob/main/LICENSE) [![NPM Version](https://img.shields.io/npm/v/%40josephmcg%2Foxlint-config)](https://www.npmjs.com/package/@josephmcg/oxlint-config)

```bash
pnpm i -D @josephmcg/oxlint-config
```

Import your preferred config based on your framework of choice:

```ts
// oxlint.config.ts
import { defineConfig } from 'oxlint'
import {
  josephmcgOxlintConfigBase,
  josephmcgOxlintConfigNext,
  josephmcgOxlintConfigReact,
} from '@josephmcg/oxlint-config'

export default defineConfig({
  extends: [josephmcgOxlintConfig*], // * = base, next, react
  // additional config
})
```

## Comments Plugin

I've created a plugin that enforces an important eslint rule, [require-description](https://eslint-community.github.io/eslint-plugin-eslint-comments/rules/require-description.html).

The js plugin linked above only registers for `// eslint-disable...`, so I needed to rewrite it to work for `// oxlint-disable...`.

```ts
// oxlint.config.ts
export default defineConfig({
  jsPlugins: ['@josephmcg/oxlint-config/plugin-comments'],
  rules: {
    '@josephmcg/plugin-comments/require-description': 'error',
  },
})
```

## Restricted Imports

I've configured sensible restricted imports for the base config to allow for proper zod tree-shaking.

For the Next.js config, I've configured restricted imports for the navigation helpers to use the i18n wrapper.

You can access those specific rules at `baseRestrictedImportPaths`, or `nextRestrictedImportPaths` if you'd like to configure your own restricted imports, while still extending the base config of this package.
