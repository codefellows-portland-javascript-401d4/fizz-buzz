
module.exports = function fizzBuzz(num) {
        let result = []
        for (var i=1; i <= num; i++){
            if (i % 3 !== 0 && num % 5 !== 0 ){
                //process.stdout.write(i);
                console.log(i);
                result.push(i);
            } else if ( num % 3 === 0 && num % 5 !== 0) {
                //process.stdout.write("fizz");
                result.push("fizz")
            } else if (num % 3 !== 0 && num % 5 === 0 ) {
                //process.stdout.write("buzz");
                result.push("buzz")
            } else if (num % 3 === 0 && num % 5 === 0) {
                //process.stdout.write("fizzbuzz");
                result.push("fizzbuzz")
            } else {
                return "unknown";
            };
        return result;

        }
    }

