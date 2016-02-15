'use strict';

module.exports = {
  root: true,
  extends: [
    './lib/es5/parser-options',
    './lib/es5/env',
    './lib/es5/possible-errors',
    './lib/es5/best-practices',
    './lib/es5/strict-mode',
    './lib/es5/variables',
    './lib/es5/nodejs-and-commonjs',
    './lib/es5/stylistic-issues',
    './lib/es5/ecmascript-6'
  ].map(require.resolve)
};
