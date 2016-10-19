
'use strict';

$(document).ready(function() {


var userInput = prompt("Please enter a number between 1 and 100");
userInput = parseInt(userInput, 10);
if ((userInput !== userInput) || (userInput > 100) || (userInput < 1)) {
    var userInput = prompt("That was not a number between 1 and 100. Please try again!");
    userInput = parseInt(userInput, 10);
    if ((userInput !== userInput) || (userInput > 100) || (userInput < 1)) {
      alert("Still not a number between 1 and 100. How about we pick a number for you?");
      userInput = Math.floor((Math.random() * 100) + 1);
      alert("We've picked the number " + userInput + " for you!");
    }
}  else {
          alert("You have entered the number " + userInput);
        };


  var results = [];

  for (var i = 1; i <= userInput; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {
      results += "FizzBuzz";

    } else if (i % 3 === 0) {
      results += "Fizz";

    } else if (i % 5 === 0) {
      results += "Buzz";

    } else {
      results += i;
    }
    results += "<br>";
  }

  $(".output").html(results);

});