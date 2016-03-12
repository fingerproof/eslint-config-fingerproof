'use strict';

module.exports = {
  root: true,
  extends: [
    './es6',
    './lib/es7/parser-options'
  ].map(require.resolve)
};
