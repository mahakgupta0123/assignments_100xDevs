/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome (str) {
 let string = str.replace(/[^a-z0-9]/gi, '').toLowerCase();
 let reverseStr= string.split('').reverse().join('');
  if (reverseStr === string) {
    return true
  } else {
    return false
  }
}

console.log(isPalindrome('Nayan'))

module.exports = isPalindrome
