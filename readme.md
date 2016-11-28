# southpark-names

[![Travis build](https://img.shields.io/travis/johemst/southpark-names.svg?style=flat-square)](https://travis-ci.org/johemst/southpark-names) [![Version](https://img.shields.io/npm/v/southpark-names.svg?style=flat-square)](https://www.npmjs.com/package/southpark-names)[![Downloads](https://img.shields.io/npm/dm/southpark-names.svg?style=flat-square)](https://npm-stat.com/charts.html?package=southpark-names)

> Get names of South Park characters.

[![Image](southparkimage.jpg)](http://www.geek.com/wp-content/uploads/2015/07/southpark-625x350.jpg)

## Installation

```
npm install southpark-names
```

## Usage

```js
var southParkNames = require('southpark-names');

var randomName = southParkNames.random();
console.log("Oh my god they killed " + randomName + "!");
//=> 'Oh my god they killed Kenny McCormick!'

var allNames = southParkNames.all;
console.log(allNames);
//=> 'Stan Marsh'
//=> 'Kyle Broflovski'
//=> '...'
```

## API

### .random()

Type: `function`

Random character name.

### .all

Type: `array`

All South Park characters.
