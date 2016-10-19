const assert = require('assert');
const fizzbuzz = require('../lib/fizzbuzz');

describe('fizzbuzz function', function() {
  it('returns the fizzbuzz sequence in an array for n given n as a parameter', function() {
    assert.deepEqual(fizzbuzz(16), [
      1,
      2,
      'fizz',
      4,
      'buzz',
      'fizz',
      7,
      8,
      'fizz',
      'buzz',
      11,
      'fizz',
      13,
      14,
      'fizzbuzz',
      16
    ]);
  });  
});