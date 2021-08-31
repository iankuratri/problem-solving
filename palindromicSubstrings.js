/**

Palindromic Substrings

Given a string str, return the number of palindromic substrings in str.

Note: The substrings with different start indexes or end indexes are counted 
as different substrings even they consist of same characters.

*/

function countPalindromes(str, left, right) {
  let count = 0;
  //Check for the palindrome
  while (
    left >= 0 &&
    right < str.length &&
    str.charAt(left) == str.charAt(right)
  ) {
    count++; //Increment the count if palindromin substring found
    left--; //To trace string in left direction
    right++; //To trace string in right direction
  }
  return count;
}

function countPalindromicSubstrings(s) {
  if (!s) return 0;

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    count += countPalindromes(s, i, i); // Odd length
    count += countPalindromes(s, i, i + 1); // Even length
  }
  return count;
}

// Test Case

// odd length
// (abcd, 0, 0) => (0, 0, a == a) => count 1 => fail
// (abcd, 1, 1) => (1, 1, b == b) => count 1 => (0, 2, a !== c) => fail
// (abcd, 2, 2) => (2, 2, c == c) => count 1 => (1, 3, b !== d) => fail
// (abcd, 3, 3) => (3, 3, d == d) => count 1 => fail

// even length
// (abcd, 0, 1) => (0, 1, a !== b) => fail => count 0
// (abcd, 1, 2) => (1, 2, b !== c) => fail => count 0
// (abcd, 2, 3) => (2, 3, c !== d) => fail => count 0
// (abcd, 3, 4) => fail => count 0

console.log(countPalindromicSubstrings("abcd")); // Returns 4 (a, b, c, d)

// odd length
// (aaa, 0, 0) => (0, 0, a == a) => count 1 => fail
// (aaa, 1, 1) => (1, 1, a == a) => count 1 => (0, 2, a == a) => count 1 => fail
// (aaa, 2, 2) => (2, 2, a == a) => count 1 => fail

// even length
// (aaa, 0, 1) => (0, 1, a == a) => count 1 => fail
// (aaa, 1, 2) => (1, 2, a == a) => count 1 => fail

console.log(countPalindromicSubstrings("aaa")); // Returns 6 (a, a, a, aa, aa, aaa)
