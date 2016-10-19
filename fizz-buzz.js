function fizzBuzz(n) {
  var results = [];
  for (var i=1; i<(n+1); i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('fizzbuzz');
    } else if (i % 3 === 0) {
      results.push('fizz');
    } else if (i % 5 === 0) {
      results.push('buzz');
    } else {
      results.push(i);
    }
  }
  return results;
}

module.exports = fizzBuzz;