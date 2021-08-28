/**
 * Fibonacci Sequence
 *
 * Give a number n, find the first n elements of the fibonacci seriies.
 *
 * Now what is fibonacci series? Well it is a series of numbers in which
 * each number ( Fibonacci number ) is the sum of the two preceding numbers.
 *
 * The first two numbers in the series are 0 and 1.
 */

//  Test Case

function printFibonacci(n) {
  const fabonacci = [0, 1];

  if (n < 2) {
    fabonacci.splice(n);
  }

  while (fabonacci.length < n) {
    let first = fabonacci[fabonacci.length - 2];
    let second = fabonacci[fabonacci.length - 1];

    let third = first + second;

    fabonacci.push(third);
  }

  return fabonacci.join(", ");
}

console.log(printFibonacci(1)); // Returns 0

console.log(printFibonacci(2)); // Returns 0 1

console.log(printFibonacci(7)); // Returns 0 1 1 2 3 5 8

// Recursive solution
function fibonacci(n) {
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function printFibonacciRecur(n) {
  // Print the fibonacci number from from 0 to n
  for (let i = 0; i < n; i++) {
    // 7 -> 0 1 3 5 8
    console.log(fibonacci(i));
  }
}

printFibonacciRecur(7); // Returns 0 1 1 2 3 5 8
