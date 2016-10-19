'use strict';

var assert = require('chai').assert;
var fizzBuzz = require('./fizzbuzz');

describe('fizz buzz', function() {
  it('fizz buzz returns the correct array', function() {
    assert.deepEqual(fizzBuzz(16), [
      1,
      2,
      'fizz',     // 3
      4,
      'buzz',     // 5
      'fizz',     // 6
      7,
      8,
      'fizz',     // 9
      'buzz',     // 10
      11,
      'fizz',     // 12
      13,
      14,
      'fizzbuzz', // 15
      16
    ]);
  });
});
