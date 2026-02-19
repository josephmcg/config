import type { Config } from 'prettier'

import josephmcgConfig from './packages/prettier-config/src/index'

const config = {
  ...josephmcgConfig,
} satisfies Config

export default config
