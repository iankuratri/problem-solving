/**
 
Longest Substring

Given a string (str), find the length of the longest substring without repeating characters.

*/

function longestSubstringLength(str) {
  const set = new Set();
  let i = 0;
  let j = 0;
  let max = 0;
  while (i < str.length) {
    if (!set.has(str.charAt(i))) {
      // If character not in set, add it to set and find new max length
      set.add(str.charAt(i++));
      max = Math.max(max, set.size);
    } else {
      // If character in set, delete it so as to add the character at the
      // end to form a new word
      set.delete(str.charAt(j++));
    }
  }
  return max;
}

// Test case
console.log(longestSubstringLength("abcabcbd")); // Returns 3 ('abc')
console.log(longestSubstringLength("aaaa")); // Returns 1 ('a')
console.log(longestSubstringLength("abbcdb")); // Returns 3 ('bcd')
