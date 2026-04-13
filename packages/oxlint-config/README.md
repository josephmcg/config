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
  // ...josephmcgOxlintConfigBase,
  // ...josephmcgOxlintConfigNext,
  // ...josephmcgOxlintConfigReact,
  // additional config
})
```

## Restricted Imports

I've configured sensible restricted imports for the base config to allow for proper zod tree-shaking.

For the Next.js config, I've configured restricted imports for the navigation helpers to use the i18n wrapper.

You can access those specific rules at `baseRestrictedImportPaths`, or `nextRestrictedImportPaths` if you'd like to configure your own restricted imports, while still benefitting from the base config.
