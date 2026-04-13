import { defineConfig } from 'oxlint'

/**
 * For `no-restricted-imports`, each config will need its own declaration.
 * There's no way to extend individual rules, since users need to be able to override the rule.
 * This will be shared among other configs.
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
  plugins: ['eslint', 'typescript', 'unicorn', 'oxc'],
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
    'arrow-body-style': 'off', // Allow both block and concise arrow functions for readability
    'capitalized-comments': 'off', // Sometimes we may comment code that should remain lowercase
    curly: 'error', // Enforce consistency for readability
    'func-style': 'off', // Allow both arrow and function declarations, they serve different purposes
    'id-length': ['error', { exceptions: ['a', 'b', 'i', 't'] }],
    'max-lines': 'off',
    'max-lines-per-function': 'off',
    'max-params': 'off',
    'max-statements': 'off',
    'new-cap': 'off', // External libraries can use poor naming conventions
    'no-console': 'error', // Use a logger utility so logs are not rendered in production
    'no-inline-comments': 'off',
    'no-magic-numbers': 'off', // Sometimes magic numbers keep code simple
    'no-restricted-imports': [
      'error',
      {
        paths: [...baseRestrictedImportPaths],
      },
    ],
    'no-ternary': 'off', // Sometimes ternary is more readable
    'sort-keys': 'off', // Manually sorting keys is often better for readability
    'sort-imports': 'off', // Let oxfmt handle this

    'typescript/consistent-type-assertions': ['error', { assertionStyle: 'never' }], // Type assertions are hacky and deserve to be banned
    'typescript/no-deprecated': 'off', // Sometimes deprecated code is necessary, plus this rule has poor performance
    'typescript/no-empty-interface': ['error', { allowSingleExtends: true }], // Allow empty prop declarations that extend react types
    'typescript/strict-boolean-expressions': [
      'error',
      {
        allowString: true,
        allowNullableBoolean: true,
        allowNullableString: true,
        allowNullableObject: true,
      },
    ],

    'unicorn/no-nested-ternary': 'off', // Allow eslint rule to handle this

    'eslint-comments/require-description': 'error',
  },
})
