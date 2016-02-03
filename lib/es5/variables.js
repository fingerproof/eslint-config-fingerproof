'use strict';

module.exports = {
  rules: {
    'init-declarations': [2, 'always'],
    'no-catch-shadow': 2,
    'no-delete-var': 2,
    'no-label-var': 2,
    'no-shadow-restricted-names': 2,
    'no-shadow': [1, { builtinGlobals: true, hoist: 'all' }],
    'no-undef-init': 1,
    'no-undef': 2,
    'no-undefined': 1,
    'no-unused-vars': [2, { vars: 'all', args: 'after-used' }],
    'no-use-before-define': [2, 'nofunc']
  }
};
