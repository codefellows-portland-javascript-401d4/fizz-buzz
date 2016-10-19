// function fizzBuzz(n) {
//     var x = [];
//     x.length = n;
//
//     for (var i = 1; i <= x.length; i++) {
//         x.push(i);
//
//         if (i % 3 === 0) {
//             x.splice(i - 1, 1, 'Fizz');
//         }
//
//         if (i % 5 === 0) {
//             x.splice(i - 1, 1, 'Buzz');
//         }
//
//         if (i % 15 === 0) {
//             x.splice(i - 1, 1, 'FizzBuzz');
//         }
//     }
//
//     console.log(x);
// }
//
// fizzBuzz(20);
// function fizzBuzz() {
// for (var i=1; i <= 20; i++)
// {
//     if (i % 15 == 0)
//         console.log("FizzBuzz");
//     else if (i % 3 == 0)
//         console.log("Fizz");
//     else if (i % 5 == 0)
//         console.log("Buzz");
//     else
//         console.log(i);
//     }
// }
//
// fizzBuzz();


// Marty's example

function fizzBuzz(n) {
    let results = [];
    for (let i = 1; i < (n + 1); i++) {
        let result = '';
        if (i % 3 === 0) result += 'fizz';
        if (i % 5 === 0) result += 'buzz';
        results.push(result || i);
    }
    console.log(results);
    return results;
}

fizzBuzz(16);
