/** Created by Gloria on 2016/10/18 **/


function fizzBuzz(num) {

  for (var i = 1; i <= num; i++) {
    if (i % 15 === 0) {
      console.log('fizzbuzz');
    } else if (i % 5 === 0) {
      console.log('buzz');
    } else if (i % 3 === 0) {
      console.log('fizz');
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(16);

module.exports = fizzBuzz;