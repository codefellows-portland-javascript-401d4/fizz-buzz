var fizzBuzz = require('../lib/fizzbuzz.js');
var assert = require('assert');

assert.deepEqual(fizzBuzz(16), [ 
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
  16 ]);