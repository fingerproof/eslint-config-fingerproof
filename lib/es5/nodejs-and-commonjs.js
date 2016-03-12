'use strict';

module.exports = {
  rules: {
    'callback-return': 1,
    'global-require': 2,
    'handle-callback-err': [2, '^err(or)?$'],
    'no-mixed-requires': [1, { grouping: true }],
    'no-new-require': 2,
    'no-path-concat': 2,
    'no-process-env': 1,
    'no-process-exit': 1,
    'no-restricted-modules': 0,
    'no-sync': 1
  }
};
