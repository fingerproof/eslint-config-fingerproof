# [ESLint](http://eslint.org/) fingerproof config

## About

Redefines ESLint configuration rules to match our coding style preferencies.

## Installation

```bash
$ npm install --save-dev eslint eslint-config-fingerproof
```

Or if you still use ESLint 2:

```bash
$ npm install --save-dev eslint@2.13.1 eslint-config-fingerproof@2.4.0
```

Or if you still use ESLint 1:

```bash
$ npm install --save-dev eslint@1.10.3 eslint-config-fingerproof@1.0.0
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

Or if you write ES7 code:

```yaml
extends: "fingerproof/es7"
```

## Useful links

- Learn more about [ESLint shareable configs](http://eslint.org/docs/developer-guide/shareable-configs).
- Use ESLint in Sublime Text thanks to [SublimeLinter](http://www.sublimelinter.com/en/latest/) and its [ESLint plugin](https://github.com/roadhump/SublimeLinter-eslint).
