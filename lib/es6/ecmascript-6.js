'use strict';

module.exports = {
  rules: {
    'arrow-body-style': [2, 'as-needed', {
      requireReturnForObjectLiteral: false
    }],
    'arrow-parens': [2, 'as-needed'],
    'arrow-spacing': [2, { before: true, after: true }],
    'constructor-super': 2,
    'generator-star-spacing': [2, { before: true, after: false }],
    'no-class-assign': 2,
    'no-confusing-arrow': [2, { allowParens: true }],
    'no-const-assign': 2,
    'no-dupe-class-members': 2,
    'no-duplicate-imports': [1, { includeExports: true }],
    'no-new-symbol': 2,
    'no-this-before-super': 2,
    'no-useless-computed-key': 2,
    'no-useless-constructor': 1,
    'no-useless-rename': [2, {
      ignoreDestructuring: false,
      ignoreImport: false,
      ignoreExport: false
    }],
    'no-var': 2,
    'object-shorthand': [2, 'always', {
      avoidQuotes: false,
      ignoreConstructors: false
    }],
    'prefer-arrow-callback': [1, {
      allowNamedFunctions: false,
      allowUnboundThis: true
    }],
    'prefer-const': [1, {
      destructuring: 'any',
      ignoreReadBeforeAssign: false
    }],
    'prefer-reflect': 1,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'rest-spread-spacing': [2, 'never'],
    'sort-imports': [1, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, { before: true, after: false }]
  }
};
