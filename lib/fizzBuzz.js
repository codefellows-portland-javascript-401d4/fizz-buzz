module.exports = function fizzBuzz(n) {

  let results = [];

  for(let i = 1; i < (n + 1); i++) {
    let result = '';
    if(i % 3 === 0) result += 'fizz';
    if(i % 5 === 0) result += 'buzz';
    results.push(result || i);
  }

  return results;

};