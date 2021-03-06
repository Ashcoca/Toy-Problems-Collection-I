/*jshint expr:true*/

/*
 * Bubble sort is the most basic sorting algorithm in all of Computer
 * Sciencedom. It works by starting at the first element of an array and
 * comparing it to the second element; if the first element is greater than the
 * second element, it swaps the two. It then compares the second to the third,
 * and the third to the fourth, and so on; in this way, the largest values
 * "bubble" to the end of the array. Once it gets to the end of the array, it
 * starts over and repeats the process until the array is sorted numerically.
 *
 * Implement a function that takes an array and sorts it using this technique.
 * Don't use JavaScript's built-in sorting function (Array.prototype.sort).
 *
 * QUERY: What's the time complexity of your algorithm? If you don't already
 * know, try to intuit this without consulting the Googles.
 *
 * Extra credit: Optimization time! During any given pass, if no elements are
 * swapped we can assume the list is sorted and can exit the function early.
 * After this optimization, what is the time complexity of your algorithm?
 *
 * Moar credits: Do you need to consider every element every time you iterate
 * through the array? Make it happen, boss. Again: Has the time complexity of
 * your algorithm changed?
*/

/*
 * Example usage:
 * bubbleSort([2, 1, 3]); // yields [1, 2, 3]
 *
*/

// Feel free to add helper functions if needed.

/*
Strategy:
1.  Can iterate over original array
2.  Create placeholder variables to make it more readable (for me)
3.  Check if the original index is less than the next index
4.  If it is, swap them
5.  Return the rearranged array!

Second Try:
Notes: Needs to iterate over entire array, not just the side by side arrays.
This time we'll use a helper function that we can call recursively. More recursion practice, yay!
We'll create a startIndex so we don't have to iterate over everything every time, increment the startIndex each recurse
Base case will be if the startIndex === array.length because then there's nothing more to check.
Move original function inside the helper
Call helper on array, startIndex + 1 

*/


var bubbleSort = function(array) {
  var startIndex = 0;
    var helper = function(array, startIndex) {
      if (startIndex === array.length) {
        return array;
      }
      for (var i = startIndex; i < array.length; i++) {
        var original = array[i];
        var nextIndex = array[i-1];
        if (original < nextIndex) {
          array[i] = nextIndex;
          array[i-1] = original;
        }
      }
      return helper(array, startIndex+1);
    }
    return helper(array, 0);
  };