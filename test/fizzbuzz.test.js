var fizzBuzz = require('../fizzBuzz');
var assert = require('assert');


describe('fizz-buzz', () => {
  it('counts to 16 correctly', () => {
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
