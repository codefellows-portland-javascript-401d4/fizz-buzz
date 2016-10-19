'use strict';

module.exports = function fizzBuzz(n) {
	var array = [];
	for (let i = 1; i < n + 1; i++) {
		array.push(i);
	}
	for (let i = 0; i < array.length; i++) {
		if (array[i] % 3 === 0 && array[i] % 5 === 0) {
			array[i] = 'fizzBuzz';
		} else if (array[i] % 3 === 0) {
			array[i] = 'fizz';
		} else if (array[i] % 5 === 0) {
			array[i] = 'buzz';
		}
	}
	return array;
};

