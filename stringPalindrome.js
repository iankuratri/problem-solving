/**
 * String Palindrome
 *
 * Given a string (str), determine if it is a palindrome.
 *
 * Note: A plaindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam.
 */

function isPalindrome(str) {
  const lowerCase = str.toLowerCase();
  return lowerCase === lowerCase.split("").reverse().join("");
}

// Test Case
console.log(isPalindrome("racecar")); // Returns true

console.log(isPalindrome("race")); // Returns false
