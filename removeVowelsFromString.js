/**
 * Remove Vowels from a String
 *
 * Given an input string (str), remove all vowels from the string.
 */

function removeVowels(str) {
  // g - global, i - case insensitive
  return str.replace(/[aeiou]/gi, "");
}

//  Test Case
console.log(removeVowels("Hello World")); // Returns Hll Wrld
