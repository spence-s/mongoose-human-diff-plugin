# mongoose-diff-plugin

[![build status](https://img.shields.io/travis/com/Spence-S/mongoose-diff-plugin.svg)](https://travis-ci.com/Spence-S/mongoose-diff-plugin)
[![code coverage](https://img.shields.io/codecov/c/github/Spence-S/mongoose-diff-plugin.svg)](https://codecov.io/gh/Spence-S/mongoose-diff-plugin)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/Spence-S/mongoose-diff-plugin.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/mongoose-diff-plugin.svg)](https://npm.im/mongoose-diff-plugin)

> See how your documents change in human readable form


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install mongoose-diff-plugin
```

[yarn][]:

```sh
yarn add mongoose-diff-plugin
```


## Usage

```js
const MongooseDiffPlugin = require('mongoose-diff-plugin');

const mongooseDiffPlugin = new MongooseDiffPlugin();

console.log(mongooseDiffPlugin.renderName());
// script
```


## Contributors

| Name               | Website                    |
| ------------------ | -------------------------- |
| **Spencer Snyder** | <http://spencersnyder.io/> |


## License

[MIT](LICENSE) © [Spencer Snyder](http://spencersnyder.io/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
