// function fizzBuzz(n) {
//     let results = [];
//     for(let i = 1; i < (n + 1); i++) {
//         let result = '';
//         if ( i % 3 === 0) result += 'fizz';
//         if ( i % 5 === 0) result += 'buzz';
//         results.push(result || i);
//     }

//     return results;
// }

function fizzBuzz(n) {
    var results = [];
    for (var i = 1; i <= n; i++) {
        if (i%15 === 0) {
            results.push('fizzbuzz');
        } else if (i%5 === 0) {
            results.push('buzz');
        } else if (i%3 === 0) {
            results.push('fizz');
        } else {
            results.push(i);
        }
    }
    return results;
}

module.exports = fizzBuzz;

