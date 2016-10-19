// Testing fizz-buzz
var assert = require('assert');
var fizzB = require('../lib/fizz-buzz');

describe('FIZZ-BUZZ testing', function() {
    it('#get an array of 16', function(){
        assert.deepEqual(fizzB(16), [
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