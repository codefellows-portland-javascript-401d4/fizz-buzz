function fizzBuzz(n) {
  var fbArray = [];
  for (var i = 1; i <= n; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      fbArray.push('fizzbuzz');
    } else if (i % 3 === 0) {
      fbArray.push('fizz');
    } else if (i % 5 === 0) {
      fbArray.push('buzz');
    } else {
      fbArray.push(i);
    }
  }
  return fbArray;
}

module.exports = fizzBuzz;
