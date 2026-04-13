import { defineConfig } from 'oxlint'

import { josephmcgOxlintConfigBase } from './config-base'

export const josephmcgOxlintConfigReact = defineConfig({
  extends: [josephmcgOxlintConfigBase],
  plugins: ['react', 'react-perf', 'jsx-a11y'],
  rules: {
    'react/jsx-props-no-spreading': 'off', // Props spreading is useful
    'react/jsx-max-depth': 'off', // Max * is arbitrary, use your judgement
    'react/react-in-jsx-scope': 'off', // Not required in React 19

    'jsx-a11y/heading-has-content': 'off', // `base-ui` render props and i18n interpolation use empty heading elements
    'jsx-a11y/no-autofocus': 'off', // Autofocus is ideal UX in certain cases
  },
})
