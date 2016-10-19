var assert = require('assert');
var fizz = require('../lib/fizzBuzz.js');
var sync = require('child_process').execSync;

describe('fizzBuzz', function() {
  it('should list all numbers in a range, and replace with fizz or buzz if divisible by 3 or 5', function(){
    
    assert.deepEqual(fizz(16), [1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz',16]);
  });

});