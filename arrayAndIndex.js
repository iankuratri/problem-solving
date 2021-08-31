/**

Array and Index

Given two arrays of integers (nums) and (index), create and return a new array (arr) which satisfies the following rules:

Initially array (arr) is empty.

From left to right read nums[i] and index[i] and insert at index index[i] the value nums[i] in array (arr) .

Repeat the previous step until there are no elements to read in nums and index.

*/

function createArray(nums, index) {
  const target = [];

  for (let i = 0; i < nums.length; i++) {
    // splice(startIndex, deleteCount, itemToAdd)
    target.splice(index[i], 0, nums[i]);
  }

  return target;
}

// Test Case
const nums = [0, 1, 2, 3, 4];
const index = [0, 1, 2, 2, 1];

console.log(createArray(nums, index)); // Returns [0,4,1,3,2]
