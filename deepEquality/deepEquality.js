/**
  * Write a function that, given two objects, returns whether or not the two
  * are deeply equivalent--meaning the structure of the two objects is the
  * same, and so is the structure of each of their corresponding descendants.
  *
  * Examples:
  *
  * deepEquals({a:1, b: {c:3}},{a:1, b: {c:3}}); // true
  * deepEquals({a:1, b: {c:5}},{a:1, b: {c:6}}); // false
  *
  * don't worry about handling cyclical object structures.
  *
  */
 var deepEquals = function(apple, orange) {
//Removed recursion, not sure it's necessary, might be tho for some edge cases

//Need to extracT the keys into arrays to compare, previous idea wasn't working
  var appleKeys = Object.keys(apple)
  var orangeKeys = Object.keys(orange)
    //first make sure these objects have the same length
    if (appleKeys.length !== orangeKeys.length) {
      return false;
    }
    //now we check to see if the keys are the same
    //.includes checks if array has a certain element, saves us a loop!
    for (var i = 0; i < appleKeys.length; i++) {
      if (!orangeKeys.includes[appleKeys[i]]) {
        return false;
      }
    }
    //finally we have to check if our values are the same!
    for (var key in apple) {
      if (apple[key] !== orange[key]) {
        return false;
      }
    }
    //if all those tests pass then we can return true
    return true;
  };
