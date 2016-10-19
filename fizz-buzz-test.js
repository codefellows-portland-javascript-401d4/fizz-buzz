var assert = require('assert');
var fizzBuzz = require('./fizz-buzz');

describe('fizzBuzz', function() {

  it('takes an integer arg and prints an array in which numbers divisible by 3 are fizz, numbers divisible by 5 are buzz, and numbers divisible by both are fizz buzz', function() {
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