# Next.js - Global Components

This plugin implements Global Components on Next.js.

## Installation

```
npm install --save next-global-components
```

or

```
yarn add next-global-components
```

## Usage

Create a `next.config.js` in your project

```js
// next.config.js
const options = {
  // VALUES
}
, { withGlobalComponents } = require('next-global-components')(options)

module.exports = withGlobalComponents()
```

Create a `components.json` in your root project

```json
{
  "[Component Name]": "[Path]",
  "[Component Name]": ["[Path]", {
    "[Child Component Name]": "[Path]",
    "[Child Component Name]": "[Path]",
    "[Child Component Name]": "[Path]"
  }, true /*FOR GET ROOT COMPONENT*/]
}
```

> The **true** will add root (**index.js**) from Parent Component

## Eslint

```js
// .eslintrc.js
const { eslint } = require('next-global-components')()

module.exports = {
  ...
  globals: eslint,
  rules: {
    'react/jsx-no-undef': ['error', { 'allowGlobals': true }]
  }
}
```

If you need get `alias` or `provides`

```js
// next.config.js
const options = {
  // VALUES
}
, { alias, provides } = require('next-global-components')(options)
```

## Options

| Option     | Type                     | Default         | Infos                                                            |
| :---       | :---                     | :---            | :---                                                             |
| Components | **Object** or **String** | components.json | Object = { **components** } / String = Path File with Components |
| Dirname    | String                   | ./components    | Path where are yours Components                                  |

## Next Config

Optionally you can add your custom Next.js configuration as parameter

```js
// next.config.js
const { withGlobalComponents } = require('next-global-components')()
module.exports = withGlobalComponents({
  webpack(config, options) {
    return config
  }
})
```
