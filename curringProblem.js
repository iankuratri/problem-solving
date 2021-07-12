/**
 * Question 1: Create a function to achieve functionality shown below:
 * sum(1)(2)(3)() = 6
 *
 * */

function sum(numberOne) {
  let total = numberOne;

  return function add(numberTwo) {
    if (numberTwo !== undefined) {
      total = total + numberTwo;
      return add;
    }

    return total;
  };
}

console.log(sum(1)(2)(5)());

/**
 * Question 2: Write a generic curry function.
 *
 * function add(a, b, c) {
 *   return a + b + c
 * }
 *
 * const curriedSum = genericCurry(add);
 * curriedSum(2)(3)(5);
 * curriedSum(2, 3)(5);
 * curriedSum(2)(3, 5);
 * curriedSum(2, 3, 5);
 */

function add(a, b, c) {
  return a + b + c;
}

function genericCurry(fn) {
  return function currify(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...newArgs) {
        return currify.apply(this, args.concat(newArgs));
      };
    }
  };
}

const curriedSum = genericCurry(add);

const s1 = curriedSum(2)(3)(5);
console.log(s1);

const s2 = curriedSum(2, 3)(5);
console.log(s2);

const s3 = curriedSum(2)(3, 5);
console.log(s3);

const s4 = curriedSum(2, 3, 5);
console.log(s4);
