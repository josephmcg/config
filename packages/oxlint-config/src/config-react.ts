import { defineConfig } from 'oxlint'

import { josephmcgOxlintConfigBase } from './config-base'

export const josephmcgOxlintConfigReact = defineConfig({
  extends: [josephmcgOxlintConfigBase],
  plugins: ['react'],
  rules: {
    'react/jsx-props-no-spreading': 'off', // Props spreading is incredibly useful, and common practice
    'react/jsx-max-depth': 'off', // This is an arbitrary limit that could lead to over-engineering
    'react/react-in-jsx-scope': 'off', // Not required in React 19

    'jsx-a11y/heading-has-content': 'off', // `base-ui` render props and i18n interpolation use empty heading elements
    'jsx-a11y/no-autofocus': 'off', // Sometimes autofocus is ideal UX
  },
})
