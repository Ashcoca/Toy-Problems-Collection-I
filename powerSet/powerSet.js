/*
 * Return an array with the power set of a given string.
 * Definition of power set: The set of all possible subsets including the empty set.
 *
 * Example:
 *
 * powerSet("abc")
 * -> [ '' , 'a', 'b', 'c', 'ab', 'ac', 'bc', 'abc' ]
 *
 * Note: 
 *  1. All characters in a subset should be sorted.
 *  2. Sets of the same characters are considered duplicates regardless of order and count only once, e.g. 'ab' and 'ba' are the same. 
 * 
 * Example 2 :
 * 
 * powerSet("jump")
 * -> ["", "j", "ju", "jm", "jp", "jmu", "jmp", "jpu", "jmpu", "u", "m", "p", "mu", "mp", "pu", "mpu"]
 */

var powerSet = function(str) {
    // //return an empty string if we're given an empty string
    // if (str === '') {
    //     return [''];
    // }

    //use array.sort() because split string makes an array we can sort
    // var splitStr = str.split('').sort()
    var power = [''];

    var helper = function(oldStr, str) {
    if (str.length === 0) {
        return power;
    }
    for (var i = 0; i < str.length; i++) {
        //we add '' + the first letter
        // if (power.includes(oldStr + str[i])) {
        //     continue;
        // }
        power.push(oldStr + str[i]);
        //then we call the helper on the next letter and set the oldStr to the bits we just went over
        console.log(power)
        console.log(oldStr)
        helper(oldStr + str[i], str.slice(i + 1));
        }
    }
    helper('', str)
    return power;
};
