/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

/*
STRATEGY:
1.  Let's do a string.split to seperate all our characters and add them to an array
2.  Let's iterate over that array to gain access to all the individual strings.
3.  Let's create an object to keep track of our letters
4.  If we find a repeated character we'll set the countObj for that letter to true
5.  If we don't find it, we'll set it to false
6.  Then we'll iterate over our our object and return the first one that hasn't been repeated


*/
var firstNonRepeatedCharacter = function(string) {
  var inputString = string.split('');
  var countObj = {};
  for (var i = 0; i < inputString.length; i++) {
    if(countObj[inputString[i]]) {
      countObj[inputString[i]] = 'Repeated'
    } else if (!countObj[inputString[i]]) {
      countObj[inputString[i]] = 'Not repeated!'   
    }
  }
  for (var key in countObj) {
      console.log(countObj)
    if (countObj[key].value === 'Not repeated!') {
      return countObj[key];
    }
  }
};
