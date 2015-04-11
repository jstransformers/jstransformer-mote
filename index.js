'use strict';

var mote = require('mote');

exports.name = 'mote';
exports.outputFormat = 'html';

exports.compile = function (str, options) {
  return mote.compile(str);
};
