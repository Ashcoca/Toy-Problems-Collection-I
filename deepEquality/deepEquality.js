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

    var helper = function(obj1, obj2) {
      for (var key1 in obj1) {
        for(var key2 in obj2) {
          if (obj1[key1] === obj2[key2]) {
          }
          if (typeof obj1[key1] === 'object' && typeof obj2[key2] === 'object') {
            helper(obj1[key1], obj2[key2])
          }
          if (obj1[key1] !== obj2[key2]) {
            return false;
        } else {
          return true;
        }
        }
      }
    }
    return helper(apple, orange);
  };
