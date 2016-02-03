# [ESLint](http://eslint.org/) fingerproof config

## About

Redefines ESLint configuration rules to match our coding style preferencies.

## Installation

```bash
$ npm install --save-dev eslint eslint-config-fingerproof
```

## Usage

Create an ESLint configuration file (we like *.eslintrc.yaml* better) which should contain at least the following line:

```yaml
extends: "fingerproof"
```

Or if you write ES6 code:

```yaml
extends: "fingerproof/es6"
```

## Useful links

- Learn more about [ESLint shareable configs](http://eslint.org/docs/developer-guide/shareable-configs).
- Use ESLint in Sublime Text thanks to [SublimeLinter](http://www.sublimelinter.com/en/latest/) and its [ESLint plugin](https://github.com/roadhump/SublimeLinter-eslint).
