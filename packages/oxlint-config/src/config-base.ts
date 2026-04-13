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
    'id-length': ['error', { exceptions: ['a', 'b', 'i', 't'] }], // In specific cases, short variable names are acceptable
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

    'typescript/consistent-type-assertions': ['error', { assertionStyle: 'never' }], // Type assertions are awful and deserve to be banned
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

    'unicorn/no-nested-ternary': 'off', // `eslint` rule handles this

    'oxc/no-rest-spread-properties': 'off',
  },
})
