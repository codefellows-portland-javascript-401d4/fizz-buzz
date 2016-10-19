'use strict';

module.exports = function fizzBuzz(n) {
  var numArray = [];
  for(var i = 1; i < (n + 1); i++) {
    if(i % 15 === 0) {
      numArray.push('fizzbuzz');
    } else if(i % 3 === 0 ) {
      numArray.push('fizz');
    } else if(i % 5 === 0) {
      numArray.push('buzz');
    } else {
      numArray.push(i);
    }
  }
  return numArray;
};
