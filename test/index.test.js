var assert = require('assert');;
var chai = require('chai');
var fizzBuzz = require('../index.js');



describe('index', function() {

  it('prints the correct sequence of numbers and words', function() {
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