var assert = require('chai').assert;
var fizzBuzz = require('./fizzbuzz');

describe('fizzbuzz', function() {
    it('tests that if you give fizzbuzz a number, it properly outputs values', function() {
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