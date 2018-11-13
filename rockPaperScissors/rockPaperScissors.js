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
Use a while loop
  // let maxPlays = Math.pow(number, number);
  // while(maxPlays > 0) {
  //   let temp = [];
  // }
*/
var rockPaperScissors = function (number) {
  let results = [];
  let plays = ["rock", "paper", "scissors"]
  let rounds = number;
  let helper = function(playedSoFar, rounds) {    
    if (rounds === 0) {
      results.push(playedSoFar);
    }
    else {
      for (let i = 0; i < plays.length; i++) {
        //concat or push?
        helper(playedSoFar.concat(plays[i]), rounds-1);
      }
    }
  };
  helper([], rounds);
  return results;
};

