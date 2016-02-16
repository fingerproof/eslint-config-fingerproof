'use strict';

module.exports = {
  rules: {
    'array-bracket-spacing': [2, 'never'],
    'block-spacing': [2, 'always'],
    'brace-style': [2, 'stroustrup', { allowSingleLine: true }],
    camelcase: [2, { properties: 'always' }],
    'comma-spacing': [2, { before: false, after: true }],
    'comma-style': [2, 'last'],
    'computed-property-spacing': [2, 'never'],
    'consistent-this': [2, 'that'],
    'eol-last': 2,
    'func-names': 1,
    'func-style': 0,
    'id-blacklist': 0,
    'id-length': [1, { min: 2, properties: 'always' }],
    'id-match': 0,
    indent: [2, 2, {
      SwitchCase: 0,
      VariableDeclarator: { var: 2, let: 2, const: 3 }
    }],
    'jsx-quotes': [2, 'prefer-double'],
    'key-spacing': [2, {
      beforeColon: false,
      afterColon: true,
      mode: 'strict'
    }],
    'keyword-spacing': [2, { before: true, after: true }],
    'linebreak-style': 0,
    'lines-around-comment': [2, {
      beforeBlockComment: true,
      afterBlockComment: false,
      beforeLineComment: false,
      afterLineComment: false,
      allowBlockStart: true,
      allowBlockEnd: true,
      allowObjectStart: true,
      allowObjectEnd: true,
      allowArrayStart: true,
      allowArrayEnd: true
    }],
    'max-depth': [2, 3],
    'max-len': [1, 80, 4, { ignoreComments: true, ignoreUrls: true }],
    'max-nested-callbacks': [2, 2],
    'max-params': [2, 3],
    'max-statements': [2, 10],
    'new-cap': [2, { newIsCap: true, capIsNew: true }],
    'new-parens': 2,
    'newline-after-var': 0,
    'newline-per-chained-call': 0,
    'no-array-constructor': 2,
    'no-bitwise': 1,
    'no-continue': 1,
    'no-inline-comments': 0,
    'no-lonely-if': 2,
    'no-mixed-spaces-and-tabs': 2,
    'no-multiple-empty-lines': [2, { max: 1 }],
    'no-negated-condition': 0,
    'no-nested-ternary': 2,
    'no-new-object': 2,
    'no-plusplus': [1, { allowForLoopAfterthoughts: true }],
    'no-restricted-syntax': [2, 'WithStatement'],
    'no-spaced-func': 2,
    'no-ternary': 0,
    'no-trailing-spaces': [2, { skipBlankLines: false }],
    'no-underscore-dangle': 0,
    'no-unneeded-ternary': [2, { defaultAssignment: false }],
    'no-whitespace-before-property': 2,
    'object-curly-spacing': [2, 'always'],
    'one-var': [2, 'never'],
    'one-var-declaration-per-line': [2, 'always'],
    'operator-assignment': [1, 'always'],
    'operator-linebreak': [2, 'before', { overrides: { '?': 'after' } }],
    'padded-blocks': [2, 'never'],
    'quote-props': [2, 'as-needed'],
    quotes: [2, 'single'],
    'require-jsdoc': 1,
    semi: [2, 'always'],
    'semi-spacing': [2, { before: false, after: true }],
    'sort-imports': [1, {
      ignoreCase: false,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
    }],
    'sort-vars': 0,
    'space-before-blocks': [2, 'always'],
    'space-before-function-paren': [2, { anonymous: 'always', named: 'never' }],
    'space-in-parens': [2, 'never'],
    'space-infix-ops': [2, { int32Hint: false }],
    'space-unary-ops': [2, { words: true, nonwords: false }],
    'spaced-comment': [2, 'always', {
      block: {
        markers: [
          '*',
          '!',
          'global',
          'eslint',
          'eslint-env',
          'eslint-enable',
          'eslint-disable'
        ]
      }
    }],
    'wrap-regex': 0
  }
};
