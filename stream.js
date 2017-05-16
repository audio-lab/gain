/**
 * @module audio-gain/stream
 *
 * Stream regulating volume of audio
 *
 */
'use strict';

var gain = require('./direct');
var inherits = require('inherits');
var Through = require('audio-through');

module.exports = Gain;

function Gain(options) {
  // Run gain factory
  var fill = gain(options);

  // Create stream
  return new Through(fill, options);
}

inherits(Gain, Through);
