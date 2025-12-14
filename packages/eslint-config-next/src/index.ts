import configReact from '@josephmcg/eslint-config-react'
import type { Linter } from 'eslint'

/**
 * Next.js specific eslint config
 */
const config: Linter.Config[] = [...configReact]

export default config
