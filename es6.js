'use strict';

module.exports = {
  root: true,
  extends: [
    './es5',
    './lib/es6/parser-options',
    './lib/es6/env',
    './lib/es6/ecmascript-6'
  ].map(require.resolve)
};
