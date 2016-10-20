function fizzBuzz(num){
  let fizzBuzzArr = [];

  if(typeof(num) === 'number'){
    for(var i = 0; i < num; i++){
      if(i % 3 === 0 && i % 5 === 0){
        console.log('fizzbuzz');
        fizzBuzzArr.push('fizzbuzz');
      } else if(i % 3 === 0){
        console.log('fizz');
        fizzBuzzArr.push('fizz');
      } else if(i % 5 === 0){
        console.log('buzz');
        fizzBuzzArr.push('buzz');
      } else {
        console.log('this number is not divisible by 3 or 5');
        fizzBuzzArr.push(i);
      }
      // console.log(fizzBuzzArr);
    }
  }
  return fizzBuzzArr;
}


module.exports = fizzBuzz;
