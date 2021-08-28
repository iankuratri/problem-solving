/**
 * Sum of Numbers
 *
 * You are given an array of two numbers [a,b]. Find the sum of those two numbers plus the sum of all the numbers between them.
 *
 * (Note: The lower number may not always be the first element in the array)
 */

// Test Case

function sum(arr) {
  const [first, second] = arr;

  const min = Math.min(first, second);
  const max = Math.max(first, second);

  let sum = 0;

  for (let i = min; i <= max; i++) {
    sum += i;
  }

  return sum;
}

console.log(sum([1, 4])); // returns 10

console.log(sum([4, 1])); // returns 10
