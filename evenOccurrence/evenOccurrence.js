/*
 * Find the first item that occurs an even number of times in an array.
 * Remember to handle multiple even-occurrence items and return the first one. 
 * Return null if there are no even-occurrence items.
*/

/*
 * example usage:
 * var onlyEven = evenOccurrence([1, 7, 2, 4, 5, 6, 8, 9, 6, 4]);
 * console.log(onlyEven); //  4
*/

var evenOccurrence = function(arr) {
  let count = 0;
  let result = null;
  //remember to sort the array, can be solved faster this way
  arr = arr.sort();
  for (let i = 0; i < arr.length; i++) {
    count = 1;
    if (arr[i] === arr[i+1]) {
      result = arr[i]
      count++;
    }
    if (count % 2 === 0) {
      return result;
    }
  }
  return result;
};
