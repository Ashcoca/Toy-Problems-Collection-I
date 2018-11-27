/*
 *  Write a function that takes as its input a string and returns an array of
 *  arrays as shown below sorted in descending order by frequency and then by
 *  ascending order by character.
 *
 *       :: Example ::
 *
 *  characterFrequency('mississippi') ===
 *  [
 *    ['i', 4],
 *    ['s', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example2 ::
 *
 *  characterFrequency('miaaiaaippi') ===
 *  [
 *    ['a', 4],
 *    ['i', 4],
 *    ['p', 2],
 *    ['m', 1]
 *  ]
 *
 *       :: Example3 ::
 *
 *  characterFrequency('mmmaaaiiibbb') ===
 *  [
 *    ['a', 3],
 *    ['b', 3],
 *    ['i', 3],
 *    ['m', 3]
 *  ]
 *
 */


var characterFrequency = function(string) {
  let result = [];
  let current = string.slice(0, 1);

  let helper = function(string, start, letter) {
    let count = 0;
    for (var i = start; i < string.length; i++) {
      if (string[i] === current) {
        count++;
      }
      result.push([string[i], count])
      if (string.length > 0) {
        current = string.splice(start + 1, start + 2)
        helper(string, start + 1, current)
      }
    }
  }
  helper(string, 0, current)
  return result;
};