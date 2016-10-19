const fizzBuzz = require('../index.js');
const assert = require('assert');

describe('fizzbuzz test', function(){
    it('returns correct array', function(){
        var expectedArray = [1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14, 'fizzbuzz', 16, 17, 'fizz', 19, 'buzz', 'fizz', 22, 23, 'fizz', 'buzz'];
        assert.deepEqual(fizzBuzz(25), expectedArray);
    });
});