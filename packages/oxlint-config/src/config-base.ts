import { defineConfig } from 'oxlint'

/**
 * `no-restricted-imports` paths config to ensure zod is being properly tree-shaken.
 * @see https://oxc.rs/docs/guide/usage/linter/rules/eslint/no-restricted-imports.html
 */
export const baseRestrictedImportPaths = [
  {
    name: 'zod',
    importNames: ['default'],
    message: "For proper tree-shaking, use the following syntax: import { z } from 'zod'",
  },
] as const

export const josephmcgOxlintConfigBase = defineConfig({
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc', 'promise'],
  categories: {
    correctness: 'error',
    suspicious: 'error',
    pedantic: 'error',
    perf: 'error',
    style: 'error',
    // restriction: 'error',
    // nursery: 'error'
  },
  options: {
    reportUnusedDisableDirectives: 'warn',
    typeAware: true,
  },
  rules: {
    'arrow-body-style': 'off',
    'capitalized-comments': 'off',
    curly: 'error',
    'func-style': 'off', // Allow both arrow and function declarations, they serve different purposes
    'id-length': [
      'error',
      {
        exceptions: [
          // Array.sort conventionally uses `a` and `b`
          'a',
          'b',
          // Array index convention
          'i',
          // i18n function is conventionally named `t`
          't',
          // `x` `y` `z` are used for coordinates
          'x',
          'y',
          'z',
          // `w` `h` are used for width and height
          'w',
          'h',
        ],
      },
    ],
    'max-lines': 'off', // Max * is arbitrary, use your judgement
    'max-lines-per-function': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'new-cap': 'off', // External libraries can use poor naming conventions (e.g. nextjs fonts)
    'no-console': 'error', // Use a logger utility so logs are not rendered in production
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off', // Magic numbers are acceptable in certain cases
    'no-restricted-imports': [
      'error',
      {
        paths: [...baseRestrictedImportPaths],
      },
    ],
    'no-ternary': 'off',
    'prefer-destructuring': 'off',
    'sort-keys': 'off',
    'sort-imports': 'off', // Handled by `oxfmt`

    'typescript/consistent-return': 'off', // `return` is functionally the same as `return undefined`
    'typescript/consistent-type-assertions': ['error', { assertionStyle: 'never' }], // Type assertions defeat the entire purpose of TypeScript
    'typescript/no-deprecated': 'off', // Sometimes deprecated code is necessary, plus this rule has poor performance
    'typescript/no-empty-interface': ['error', { allowSingleExtends: true }], // Allow empty prop declarations that extend react types
    'typescript/no-explicit-any': 'error', // Use `unknown` instead of `any`
    'typescript/no-import-type-side-effects': 'error', // Prevent side effects from type imports
    'typescript/no-non-null-assertion': 'error', // Non-null assertions lead to brittle code and unexpected runtime errors
    'typescript/prefer-readonly-parameter-types': 'off', // This would make everything verbose
    'typescript/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableObject: true,
      },
    ],

    'unicorn/no-nested-ternary': 'off', // `eslint` rule handles this
    'unicorn/no-useless-undefined': 'off', // undefined is better than null, and sometimes we need to return undefined to indicate a missing value

    'oxc/no-rest-spread-properties': 'off',
  },
  overrides: [
    {
      plugins: ['vitest'],
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'vitest/max-expects': 'off',
        'vitest/no-hooks': 'off',
        'vitest/no-importing-vitest-globals': 'off',
        'vitest/prefer-expect-assertions': 'off',
        'vitest/prefer-strict-boolean-matchers': 'error',
        'vitest/prefer-to-be-falsy': 'off',
        'vitest/prefer-to-be-truthy': 'off',
        'vitest/require-test-timeout': 'off',
        'vitest/valid-title': 'off',
      },
    },
  ],
})
