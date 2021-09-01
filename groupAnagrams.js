/**
 
Group Anagrams

Given an array (arr) of strings, group anagrams together.

*/

function groupAnagrams(arr) {
  const anagrams = new Map();

  for (const word of arr) {
    const key = [...word].sort().join("");
    if (anagrams.has(key)) {
      let curr = anagrams.get(key);
      anagrams.set(key, [...curr, word]);
    } else {
      anagrams.set(key, [word]);
    }
  }

  return anagrams.values();
}

// Test Case
const arr = ["eat", "tea", "tan", "ate", "nat", "bat"];

console.log(groupAnagrams(arr)); // Groups into ["ate","eat","tea"], ["nat","tan"], ["bat"]
