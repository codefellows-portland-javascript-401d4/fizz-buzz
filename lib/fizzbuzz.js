function fizzBuzz(n) {
    var fizzArr =  [];
    for (var i=1; i <= n; i++) {
        if (i%15 === 0) {
            fizzArr.push('fizzbuzz');
        } else if (i%5 === 0) {
            fizzArr.push('buzz');
        } else if (i%3 === 0) {
            fizzArr.push('fizz');
        } else {
            fizzArr.push(i);
        }

    }
    return fizzArr;
}

module.exports = fizzBuzz;