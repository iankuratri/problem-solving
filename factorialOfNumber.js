/**
 * Factorial of a Number
 *
 * Give an integer (num), find the factorial of that integer.
 *
 * If the integer is represented as num, the factorial of num is the product
 * of all positive integers less than or equal to num.
 *
 * Example
 *
 * Factorial of 4 = 4 * 3 * 2 * 1
 *
 * Factorial of 4 = 24
 */

//  Test Case

function factorial(num) {
  let factorial = 1;

  if (num === 0) return factorial;

  while (num) {
    factorial *= num;
    num--;
  }

  return factorial;
}

console.log(factorial(0)); // Returns 1 (We're not going to understand the math behind this)

console.log(factorial(1)); // Returns 1

console.log(factorial(4)); // Returns 24

console.log(factorial(5)); // Returns 120

// Recursive solution

function factorialRecur(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorialRecur(num - 1);
}

console.log(factorialRecur(0)); // Returns 1 (We're not going to understand the math behind this)

console.log(factorialRecur(1)); // Returns 1

console.log(factorialRecur(4)); // Returns 24

console.log(factorialRecur(5)); // Returns 120
