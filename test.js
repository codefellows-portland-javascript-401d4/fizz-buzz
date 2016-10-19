'use strict';

var assert = require('chai').assert;

var fizzBuzz = require('./fizzbuzz');

describe('fizz buzz', function() {
  it('if number is fizz or buzz?', function() {
    assert.deepEqual(fizzBuzz(5), ['fizz', 'buzz']);
  });
});
