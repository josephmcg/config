import { defineConfig } from 'oxlint'

import { josephmcgOxlintConfigBase } from './config-base'

export const josephmcgOxlintConfigReact = defineConfig({
  extends: [josephmcgOxlintConfigBase],
  plugins: ['react', 'react-perf', 'jsx-a11y'],
  settings: {
    react: {
      version: '19',
    },
  },
  rules: {
    // Helpful in enforcing i18n
    'react/jsx-curly-brace-presence': ['error', { children: 'always' }],
    'react/jsx-max-depth': 'off', // Max * is arbitrary, use your judgement
    'react/jsx-props-no-spreading': 'off', // Props spreading is useful
    'react/react-in-jsx-scope': 'off', // Not required in React 19

    // These would be ideal, but they're not pragmatic to fix at the moment. Most of them are not consequential for RSC
    'react-perf/jsx-no-jsx-as-prop': 'off',
    'react-perf/jsx-no-new-array-as-prop': 'off',
    'react-perf/jsx-no-new-function-as-prop': 'off',
    'react-perf/jsx-no-new-object-as-prop': 'off',

    'jsx-a11y/heading-has-content': 'off', // `base-ui` render props and i18n interpolation use empty heading elements
    'jsx-a11y/no-autofocus': 'off', // Autofocus is ideal UX in certain cases
  },
})
