/**
 * Anagram
 *
 * Given two strings (str1 and str2), determine if str1 is anagram of str2.
 *
 * Note: An anagram is a word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
 */

function sortString(str) {
  return str.toLowerCase().split("").sort().join("");
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return sortString(str1) === sortString(str2);
}

// Test Case
console.log(isAnagram("racecar", "carrace")); // Returns true

console.log(isAnagram("racecar", "carracr")); // Returns false

console.log(isAnagram("Ankur", "Atri")); // Returns false
