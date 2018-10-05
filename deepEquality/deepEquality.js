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

//Need to extrac the keys into arrays to compare
var appleKeys = Object.keys(apple)
var orangeKeys = Object.keys(orange)

    var helper = function(obj1, obj2) {
      //first make sure they objects have the same length
      if (obj1.length !==obj2.length) {
        return false;
      }
      //now we check to see if the keys are the same
      for (var i = 0; i < obj1.length; i++) {
        if (!obj2.includes[obj1[i]]) {
          return false;
        }
      }
      return true;

    }
    return helper(appleKeys, orangeKeys);
  };
