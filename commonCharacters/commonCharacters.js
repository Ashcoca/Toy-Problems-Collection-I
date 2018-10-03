/**
 * Write a function `f(a, b)` which takes two strings as arguments and returns a
 * string containing the characters found in both strings (without duplication), in the
 * order that they appeared in `a`. Remember to skip spaces and characters you
 * have already encountered!
 *
 * Example: commonCharacters('acexivou', 'aegihobu')
 * Returns: 'aeiou'
 *
 * Extra credit: Extend your function to handle more than two input strings.
 */

 /*
 I just realized I misread the instructions, I've been trying to keep track of the # of common chars
 I'll have to come back and retry this exercise later
 */


var commonCharacters = function(string1, string2) {
  var letterCount = {};
  var firstString = string.split('');
  var secondString = string.split('');
  var newStr = '';

  for (var i = 0; i < firstString.length; i++) {
    if (letterCount[firstString[i]] === undefined) {
      letterCount[firstString[i]] = 1;
    }
    if (letterCount[firstString1[i]]) {
      letterCount[firstString[i]] ++;
    }
  }
  for (var j = 0; j < secondString.length; j++) {
    if (letterCount[secondString[j]] === undefined) {
      letterCount[secondString[j]] = 1;
    }
    if (letterCount[secondString[j]]) {
      letterCount[secondString[j]] ++;
    }
  }
  for (var key in letterCount) {
    newStr += letterCount[key]
  }
  console.log(newStr);
  return newStr;
};

