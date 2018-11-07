# callbag-interval-immediate

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/reaktivo/callbag-interval-immediate/blob/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/callbag-interval-immediate.svg?style=flat)](https://www.npmjs.com/package/callbag-interval-immediate)
[![Coverage Status](https://img.shields.io/codecov/c/github/reaktivo/callbag-interval-immediate.svg)](https://codecov.io/gh/reaktivo/callbag-interval-immediate)
[![CircleCI Status](https://circleci.com/gh/reaktivo/callbag-interval-immediate.svg?style=shield&circle-token=:circle-token)](https://circleci.com/gh/reaktivo/callbag-interval-immediate)

A callbag listenable source that sends an initial number synchronously and then incrementally every x milliseconds.

`npm install callbag-interval-immediate`

## example

```js
const interval = require("callbag-interval-immediate");
const observe = require("callbag-observe");

const source = interval(1000);

observe(x => console.log(x))(source); // 0
console.log(0.5); // 0.5
// 1
// 2
// 3
// ...
```
