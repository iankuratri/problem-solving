/**
 * Duplicate Elements
 *
 * Given an array (arr) of elements, one element in the array occurs twice. Find the element.
 */

function findDuplicate(arr) {
  const setOfNumbers = new Set();

  for (const num of arr) {
    if (setOfNumbers.has(num)) {
      return num;
    } else {
      setOfNumbers.add(num);
    }
  }

  return "No duplicate found.";
}

// Test Case
const arr = [2, 4, 6, 8, 2];

console.log(findDuplicate(arr)); // Returns 2
