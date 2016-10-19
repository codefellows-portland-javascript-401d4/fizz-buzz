function fizzBuzz(n){
    var arr = [];
    for (var i = 1; i <= n; i ++){
        if (i % 15 === 0)
        {
            arr.push('fizz buzz');
        }
        else if (i % 5 === 0){
            arr.push('buzz');
        }
        else if (i % 3 === 0){
            arr.push('fizz')
        }
        else {
            arr.push(i);
        }
    }
    console.log(arr);
    return arr;
};

module.exports = fizzBuzz;