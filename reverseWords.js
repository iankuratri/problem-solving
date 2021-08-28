/**
 * Reverse Words
 *
 * Given an input string (str), reverse the string word by word.
 *
 * Note:
 *
 * 1. Your reversed string should not contain leading or trailing spaces.
 *
 * 2. You need to reduce multiple spaces between two words to a single space in the reversed string.
 */

function reverseWords(str) {
  // /\s+/ - regex for matching one or more space
  return str.trim().split(/\s+/).reverse().join(" ");
}

// Test Case
console.log(reverseWords("Hello World")); // Returns 'World Hello'

console.log(reverseWords(" This is  a  test string ")); // Returns 'string test a is This'
