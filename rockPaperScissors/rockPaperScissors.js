/*
* Write a function that generates every sequence of throws a single
* player could throw over a three-round game of rock-paper-scissors.
*
* Your output should look something like:
*   [["rock", "rock", "rock"],
*    ["rock", "rock", "paper"],
*    ["rock", "rock", "scissors"],
*    ["rock", "paper", "rock"],
             ...etc...
     ]
*
* Extra credit:
*   - Make your function return answers for any number of rounds.
* Example:
* rockPaperScissors(5); // => [['rock', 'rock', 'rock', 'rock', 'rock'], etc...]
*
*/

/*
Strategy:
So I could use a random number generator and assign each number to either
rock or paper or scissors. 
We'll use a helper function to generate an array with random numbers
Reassign those random numbers to strings.


*/
var rockPaperScissors = function (array) {
  var moves = [1, 2, 3];
  
  //we'll use this helper function to generate uniquely random output arrays
  var helper = function(array) {
   var copyArr = array.slice()
    for (var i = copyArr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = copyArr[i];
      copyArr[i] = copyArr[j];
      copyArr[j] = temp;
    }
  return copyArr;
  };
//here we'll try to replace the numbers with either rock paper or scissors
//depending on the randomly generated output array
//This all should be refactored back into my helper function, I don't need
//to have made so many variables.
var game = [];
var output = helper(moves);
  for (var k = 0; k < output.length; k++) {
    if (output[k] == 1) {
      game.push('rock');
    } else if (output[k] == 2) {
      game.push('paper');
    } else if (output[k] == 3) {
      game.push('scissors');
    }
  console.log(game)
  return game;
  }
};

