# mongoose-human-diff-plugin

[![build status](https://img.shields.io/travis/com/Spence-S/mongoose-human-diff-plugin.svg)](https://travis-ci.com/Spence-S/mongoose-human-diff-plugin)
[![code coverage](https://img.shields.io/codecov/c/github/Spence-S/mongoose-human-diff-plugin.svg)](https://codecov.io/gh/Spence-S/mongoose-human-diff-plugin)
[![code style](https://img.shields.io/badge/code_style-XO-5ed9c7.svg)](https://github.com/sindresorhus/xo)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![made with lass](https://img.shields.io/badge/made_with-lass-95CC28.svg)](https://lass.js.org)
[![license](https://img.shields.io/github/license/Spence-S/mongoose-human-diff-plugin.svg)](LICENSE)
[![npm downloads](https://img.shields.io/npm/dt/mongoose-human-diff-plugin.svg)](https://npm.im/mongoose-human-diff-plugin)

> See how your documents change in human readable form


## Table of Contents

* [Install](#install)
* [Usage](#usage)
* [About](#about)
* [Contributors](#contributors)
* [License](#license)


## Install

[npm][]:

```sh
npm install mongoose-human-diff-plugin
```

[yarn][]:

```sh
yarn add mongoose-human-diff-plugin
```


## Usage

```js
const MongooseHumanDiffPlugin = require('mongoose-human-diff-plugin');
const mongoose = require('mongoose');

const MySchema = new mongoose.schema({
  ...
});

const changeCallback = diff => console.log(diff.join('\n'))

const options = {}

MySchema.plugin(mongooseHumanDiffPlugin(changeCallback), options)
```


## About

`mongoose-human-diff-plugin` is a wrapper around [human-object-diff](https://github.com/Spence-S/human-object-diff)

All options are directly passed to the [human-object-diff](https://github.com/Spence-S/human-object-diff#configuring) library.

Use it to respond to changes in your documents.

For Example, let's say you have a User Schema where the users can change personal information.
You could use `mongoose-human-diff-plugin` to send an email to users alerting them of the changes.
Simply, add the email logic in your callback, and use the human readable changes to alert them.
This could be applied to changes in schemas that you need to alert any one about!


## Contributors

| Name               | Website                    |
| ------------------ | -------------------------- |
| **Spencer Snyder** | <http://spencersnyder.io/> |


## License

[MIT](LICENSE) © [Spencer Snyder](http://spencersnyder.io/)


## 

[npm]: https://www.npmjs.com/

[yarn]: https://yarnpkg.com/
