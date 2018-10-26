
/**
 * Given a roman numeral as input, write a function that converts the roman
 * numeral to a number and outputs it.
 *
 * Ex:
 * translateRomanNumeral("LX") // 60
 *
 * When a smaller numeral appears before a larger one, it becomes
 * a subtractive operation. You can assume only one smaller numeral
 * may appear in front of larger one.
 *
 * Ex:
 * translateRomanNumeral("IV") // 4
 *
 * You should return `null` if the input is not a string. You can expect
 * all non-empty string inputs to be valid roman numerals.
 */

var DIGIT_VALUES = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var translateRomanNumeral = function(romanNumeral) {
  let result = 0;

  if (typeof romanNumeral === "string") {
    let romanArray = romanNumeral.split('');

    //loop through split numerals
    for (var i = 0; i < romanArray.length; i++) {

      //set the current char to the value from the DIGIT_VALUES table, same with nextChar
      let currentChar = DIGIT_VALUES[romanArray[i]];
      let nextChar = DIGIT_VALUES[romanArray[i+1]];

      //if the currentChar is less, i.e. if it's an IV or IX situation...
      if (currentChar < nextChar) {
        //subtract the I value from the nextChar and add it to the result
        result += nextChar - currentChar;
        i++; //increment again since we're using two numerals here
      } else {
        result += currentChar;
      }
    }
    return result;
  } else {
    return null;
  };
};
