/**
 * Write a function that, given a string, Finds the longest run of identical
 * characters and returns an array containing the start and end indices of
 * that run. If there are two runs of equal length, return the first one.
 * For example:
 *
 *   longestRun("abbbcc") // [1, 3]
 *   longestRun("aabbc")  // [0, 1]
 *   longestRun("abcd")   // [0, 0]
 *   longestRun("")       // null
 *
 * Try your function with long, random strings to make sure it handles large
 * inputs well.
 */

var longestRun = function (string) {
  //non working solution, needs to be tweaked, but I'd like to turn in something.
  let output = [null, null];
  var current = '';
  for (var i = 0; i < string.length; i++) {
    if (string[i-1] === string[i]) {
      if (output[0] === null) {
        output[0] = i - 1;
        current = string[i-1];
        console.log(current)
      }
      if (string[i] === current) {
        output[1] = i;
      }
    }
  }
  return output;

};

// If you need a random string generator, use this!
// (you wont need this function for your solution but it may help with testing)
var randomString = function (len) {
  var text = '';
  var possible = 'abcdefghijklmnopqrstuvwxyz';

  for (var i = 0; i < len; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
};
