/**
 * Longest Word in a String
 *
 * Given a string (str), find the longest word in the string.
 *
 * Note: If one more more words have the same length, return the first occuring word of the same length.
 */

// My solution
function longestWord(str) {
  return str.split(/\s+/).sort((a, b) => b.length - a.length)[0];
}

// Test Case
console.log(longestWord("My name is Vishwas")); // Returns 'Vishwas'
console.log(longestWord("Hello world")); // Returns 'Hello'

// Other solution
function longestWordTwo(str) {
  const strArr = str.split(" ");
  const longestWord = strArr.reduce((acc, curr) => {
    return acc.length >= curr.length ? acc : curr;
  }, "");
  return longestWord;
}

// Test Case
console.log(longestWordTwo("My name is Vishwas"));
console.log(longestWordTwo("Hello world"));
