import { defineConfig } from 'oxlint'

const config = defineConfig({
  categories: {
    correctness: 'error',
    nursery: 'error',
    pedantic: 'error',
    perf: 'error',
    restriction: 'error',
    style: 'error',
    suspicious: 'error',
  },
  ignorePatterns: [
    'packages/eslint-config-react/src/index.ts',
    'packages/eslint-config-next/src/index.ts',
    'packages/prettier-config/src/index.ts',
  ],
  jsPlugins: ['@eslint-community/eslint-plugin-eslint-comments'],
  options: {
    typeAware: true,
  },
  overrides: [
    {
      files: ['./*config.ts', './packages/**/*config.ts'],
      plugins: ['import'],
      rules: {
        'import/no-default-export': 'off',
      },
    },
    {
      files: ['./types/**'],
      plugins: ['import'],
      rules: {
        'import/no-unassigned-import': 'off',
      },
    },
    {
      env: {
        browser: true,
      },
      files: ['*.test.ts'],
      plugins: ['vitest'],
      rules: {
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-strict-boolean-matchers': 'error',
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
      },
    },
  ],
  plugins: [
    'eslint',
    'typescript',
    'unicorn',
    'oxc',
    'import',
    'promise',
    'node',
    // 'jsdoc',
    // 'react',
    // 'react-perf',
    // 'jsx-a11y',
    // 'nextjs',
  ],
  rules: {
    'import/no-named-export': 'off',
    'import/prefer-default-export': 'off',
  },
})

export default config
