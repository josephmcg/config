import { Linter } from 'eslint'

const config = {
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:unicorn/recommended',
  ],
  ignorePatterns: [
    '**/package-lock.json',
    '**/pnpm-lock.yaml',
    '**/node_modules/**',
    '**/dist/**',
    '.next',
  ],
  plugins: [
    '@typescript-eslint',
    'react',
    'jsx-a11y',
    'simple-import-sort',
    'unused-imports',
  ],
  rules: {
    curly: 'error',
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],
    '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    'react/prop-types': 'off', // use zod if you need runtime validation
    'unicorn/filename-case': [
      'error',
      {
        cases: { camelCase: true, pascalCase: true, kebabCase: true },
      },
    ],
    'unicorn/prevent-abbreviations': 'off',
    'simple-import-sort/imports': 'error',
    'simple-import-sort/exports': 'error',
    'unused-imports/no-unused-imports': 'error',
  },
} as const satisfies Linter.Config

export default config
