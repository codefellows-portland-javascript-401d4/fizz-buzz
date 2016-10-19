function fizzbuzz(number) {
    var newArray = [];
    for (var i = 1; i <= number; i++) {
        if ((i % 3 === 0) && (i % 5 === 0)) {
            newArray.push('fizzbuzz');
        } else if (i % 5 === 0) {
            newArray.push('buzz');
        } else if (i % 3 === 0) {
            newArray.push('fizz');
        } else {
            newArray.push(i);
        }
    };
    return newArray;
};

module.exports = fizzbuzz;