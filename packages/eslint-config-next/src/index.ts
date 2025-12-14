import { josephmcgReactEslintConfig } from '@josephmcg/eslint-config-react'
import type { InfiniteDepthConfigWithExtends } from 'typescript-eslint'

/**
 * Next.js specific eslint config
 */
export const josephmcgNextEslintConfig: InfiniteDepthConfigWithExtends = [
  josephmcgReactEslintConfig,
]
