module.exports = function fizzbuzz(fbInteger) {
  var fbArr = [];
    for (var i=1;i<=fbInteger;i++) {
			var fbStr = '';
			if(i%3 === 0){
				fbStr +='Fizz';
			}
      if(i%5 === 0){
        fbStr+='Buzz';
      } 
      if(fbInteger%3 !== 0 && i%5 !== 0) {
        fbArr.push(i);
      } else {
        fbArr.push(fbStr);
      }
    }
  
  return fbArr;
};