'use strict';


var fizzOrBuzz = function(n) {
  var results = [];
  for (var i = 1; i < (n + 1); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('fizz buzz');
    } else if(i % 5 === 0) {
      results.push('buzz');
    } else if (i % 3 === 0) {
      results.push('fizz');
    };
  };
  return results;
};

console.log(fizzOrBuzz(5));
module.exports = fizzOrBuzz;