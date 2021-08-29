/**
 * Non Repeating Words
 *
 * Given two strings (str1) and (str2), return a list of all non-repeating words.
 */

function nonRepeatingWords(str1, str2) {
  const allWords = `${str1} ${str2}`.split(" ");
  const wordsCount = new Map();
  const nonRepeating = [];

  allWords.forEach((word) => {
    wordsCount.has(word)
      ? wordsCount.set(word, wordsCount.get(word) + 1)
      : wordsCount.set(word, 1);
  });

  for (const [word, count] of wordsCount) {
    if (count === 1) nonRepeating.push(word);
  }

  return nonRepeating;
}

//  Test Case
console.log(nonRepeatingWords("Hello world", "Hello Vishwas")); // Returns["world", "Vishwas"];

console.log(nonRepeatingWords("Hello Hello", "Welcome Vishwas")); // Returns["Welcome", "Vishwas"];
