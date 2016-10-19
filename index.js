function fizzBuzz(number) {
    var arr = [];
    for(var i = 0; i < number; i++) {
        arr[i] = i + 1;
        if (arr[i] % 3 === 0 && arr[i] % 5 === 0) {
            arr[i] = 'fizzbuzz';
        } else if (arr[i] % 3 === 0) {
            arr[i] = 'fizz';
        } else if (arr[i] % 5 === 0) {
            arr[i] = 'buzz';
        }
    }
    return arr;
}

module.exports = fizzBuzz;