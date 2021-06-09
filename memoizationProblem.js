/**
 * Memoization
 *
 * It is an optimization technique used primarily to speed up computer
 * programs by storing the results of expensive function calls and returning
 * the cached result when the same inputs occur again
 */

/**
 * Problem 1
 *
 * Implement a function called memoizedSquare which will calculate the square
 * of an number for the first time and for the subsequent times,
 * will return from cache the already computed result
 */

function square(num) {
  return num * num;
}

function memoizedSquare() {
  const cache = {};

  return function optimizedSquare(num) {
    if (num in cache) {
      console.log(`returning saved square of ${num}:`);
      return cache[num];
    } else {
      console.log(`calculating square of ${num}:`);
      const result = square(num);
      cache[num] = result;
      return result;
    }
  };
}

const memoSquare = memoizedSquare();

console.log(memoSquare(2));
console.log(memoSquare(3));
console.log(memoSquare(4));

console.log(memoSquare(2));
console.log(memoSquare(3));
console.log(memoSquare(4));

/**
 * Problem 2
 *
 * Implement a function called memoizedSum which will calculate the sum
 * of arguments for the first time and for the subsequent times,
 * will return from cache the already computed result
 */

function add(a, b) {
  return a + b;
}

// Generic implementation of Memoization problem, this fn can be used for square, sum etc.
function memoize(callback) {
  const cache = {};

  return function (...args) {
    const key = args.toString();

    if (key in cache) {
      console.log(`Returning from cache for ${key}...`);
      return cache[key];
    } else {
      console.log(`Computing result for ${key}...`);
      const result = callback(...args);
      cache[key] = result;
      return result;
    }
  };
}

const memoSum = memoize(add);

console.log(memoSum(1, 2));
console.log(memoSum(2, 3));
console.log(memoSum(4, 5));

console.log(memoSum(1, 2));
console.log(memoSum(2, 3));
console.log(memoSum(4, 5));
