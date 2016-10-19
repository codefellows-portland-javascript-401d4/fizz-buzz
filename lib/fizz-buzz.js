
function fizzBuzz(theSize) {
    var retArray = [];
    for (var i = 1; i < (theSize +1); i++) {
        var item = '';
        if( i % 3 === 0 ) item += 'fizz';
        if( i % 5 === 0 ) item += 'buzz';
        retArray.push(item || i);
    };
    return retArray;
};

module.exports = fizzBuzz;