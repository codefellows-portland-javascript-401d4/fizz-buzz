var fizzBuzz = function(num) {
  var len = num;
  var array = [];
  for (var i=1; i <= num; i++) {
    var result = '';
    if(i % 3 === 0) result += 'fizz';
    if(i % 5 === 0) result += 'buzz';
    array.push(result || i);
  };
  return array;
};
console.log(fizzBuzz(process.argv[2]));
module.exports = fizzBuzz;
