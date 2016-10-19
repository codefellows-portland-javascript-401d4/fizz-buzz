'use strict';
var assert = require('chai').assert;
var fizzbuzz = require('./fizz-buzz.js');

describe('testing fizzbuzz functionality', function() {
    it('prints out Fizz, Buzz, FizzBuzz, or the number', function(){
        assert.deepEqual(fizzbuzz(5), [1, 2, "Fizz", 4, "Buzz"]);
    });
});