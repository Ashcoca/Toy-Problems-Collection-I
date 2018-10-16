/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */
var balancedParens = function(input) {
    if (input.length % 2 !== 0) {
        return false;
    }
    var start = input.split('');
    var splitInput;
    for (var i = 0; i < start.length; i++) {
        if (start[i] === '(' || '{' || '[') {
            splitInput = start.slice(i)
        }
    }
    // var onlyBraces = input.replace(/[^a-zA-Z0-9-_]/g, '');
    // console.log(onlyBraces)
    var rightClose = 0;
    var leftClose = 0;

    for (var i = 0; i < splitInput.length; i++) {
        if (splitInput[i] === '(' || '[' || '{') {
            rightClose ++;
        }
        if (splitInput[i] === ')' || ']' || '}') {
            leftClose ++;
        }
    }
    if (leftClose !== rightClose) {
        return false;
    }
    return true;
};

console.log(balancedParens('(())'));

