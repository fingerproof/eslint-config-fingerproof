'use strict';

module.exports = {
  rules: {
    'arrow-body-style': [2, 'as-needed'],
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
    'no-useless-constructor': 1,
    'no-var': 2,
    'object-shorthand': [2, 'always'],
    'prefer-arrow-callback': 1,
    'prefer-const': [1, { destructuring: 'any' }],
    'prefer-reflect': 1,
    'prefer-rest-params': 2,
    'prefer-spread': 2,
    'prefer-template': 2,
    'require-yield': 2,
    'template-curly-spacing': [2, 'never'],
    'yield-star-spacing': [2, { before: true, after: false }]
  }
};
