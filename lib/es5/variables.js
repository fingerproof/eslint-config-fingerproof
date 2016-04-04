'use strict';

module.exports = {
  rules: {
    'init-declarations': [2, 'always'],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-restricted-globals': 0,
    'no-shadow': [1, { builtinGlobals: true, hoist: 'all' }],
    'no-shadow-restricted-names': 2,
    'no-undef': 2,
    'no-undef-init': 1,
    'no-undefined': 1,
    'no-unused-vars': [2, {
        vars: 'all',
        args: 'after-used',
        caughtErrors: 'none'
    }],
    'no-use-before-define': [2, 'nofunc']
  }
};
