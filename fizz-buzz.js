function fizzBuzz(n) {
  var results = [];
  for (var i=0; i<n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push(i + ' fizz buzz');
    } else if (i % 3 === 0) {
      results.push(i + ' fizz');
    } else if (i % 5 === 0) {
      results.push(i + ' buzz');
    } else {
      results.push(i);
    }
  }
  return results;
}

var test = fizzBuzz(15);

console.log(test);