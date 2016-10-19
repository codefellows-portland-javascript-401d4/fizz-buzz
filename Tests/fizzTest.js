var fizzBuzz = require('../fizzBuzz');
var assert = require('assert');

describe('fizzBuzz', function(){
    it ('should return an array containing numbers, the word "fizz" in place of numbers divisible by 3, the word"Buzz" in place of numbers divisible by 5" and the words"fizz buzz if both conditions are true.', function(){
        var fizzBuzzResult = fizzBuzz(15);
       assert.deepEqual(fizzBuzzResult, [ 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz', 'buzz', 11, 'fizz', 13, 14,'fizz buzz']);
        });
    });