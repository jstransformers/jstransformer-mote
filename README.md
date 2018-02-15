# jstransformer-mote

[Mote.js](https://github.com/satchmorun/mote) support for [JSTransformer](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-mote/master.svg)](https://travis-ci.org/jstransformers/jstransformer-mote)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-mote/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-mote)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-mote/master.svg)](http://david-dm.org/jstransformers/jstransformer-mote)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-mote.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-mote.svg)](https://www.npmjs.org/package/jstransformer-mote)

## Installation

    npm install jstransformer-mote

## API

```js
var mote = require('jstransformer')(require('jstransformer-mote'))

mote.render('Hello, {{name}}!', { name: 'World' }).body
//=> 'Hello, World!'
```

## License

MIT
