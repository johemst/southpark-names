'use strict';
var uniqueRandomArray = require('unique-random-array');
var southParkNames = require('./southpark-names.json');

exports.all = southParkNames;
exports.random = uniqueRandomArray(southParkNames);
