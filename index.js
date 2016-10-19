/** Created by Gloria on 2016/10/18 **/


function fizzBuzz(num) {

  var returnArray = [];

  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
      returnArray.push('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
      returnArray.push('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
      returnArray.push('fizz');
    } else {
      console.log(i);
      returnArray.push(i);
    }
  }

  return returnArray;
}

module.exports = fizzBuzz;