'use strict';
var assert = require('mocha').assert;
var fizzbuzz = require('./fizzbuzz');

describe('fizzbuzz', function() {
    it('prints out fizz, buzz, fizzbuzz, or the number', function(){
        assert.deepEqual(fizzbuzz(15), ['fizz', 'buzz']);
    });
});