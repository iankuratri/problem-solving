/**
 
Longest Palindrome

Given a string (str) which consists of lowercase or uppercase letters, find the length of the longest

palindromes that can be built with those letters.

Note: This is case sensitive, for example "Aa" is not considered a palindrome.

*/

// Test Case

function longestPalindrome(str) {
  const characters = new Set();
  let length = 0;

  for (const s of str) {
    if (characters.has(s)) {
      characters.delete(s);
      length++;
    } else {
      characters.add(s);
    }
  }

  // If elements left in the set, use 1 letter in the middle of the palindromic string
  if (characters.size) {
    return 2 * length + 1;
  } else {
    return 2 * length;
  }
}

console.log(longestPalindrome("abccccdd")); // Returns 7 ('dccaccd')
