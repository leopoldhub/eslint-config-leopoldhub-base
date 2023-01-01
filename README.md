# eslint-config-leopoldhub-base

> my personal javascript eslint configuration

this configuration is based on the `eslint:recommended` configuration and adds some rules to make it more strict.

## Install

```sh
npm install --save-dev eslint-config-leopoldhub-base eslint\
  prettier-config-leopoldhub prettier
```

## Usage

put this in your `.eslintrc`:

```json
{
  "extends": "eslint-config-leopoldhub-base"
}
```

put this in your `package.json`:

```json
{
  "prettier": "prettier-config-leopoldhub",
  "scripts": {
    "lint": "prettier --write . && prettier --check . && eslint ."
  }
}
```
