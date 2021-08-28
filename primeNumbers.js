/**
 * Prime Numbers
 *
 * Given two numbers min and max, find all the prime numbers in the range of min to max. (min and max included)
 */

function isPrime(num) {
  let isPrime = true;

  if (num === 0 || num === 1) {
    isPrime = false;
    return isPrime;
  }

  // Sufficient to check till num/2
  for (let factor = 2; factor <= num / 2; factor++) {
    if (num % factor === 0) {
      isPrime = false;
      break;
    }
  }

  return isPrime;
}

function printPrime(min, max) {
  for (let num = min; num <= max; num++) {
    console.log(num, isPrime(num) ? "is Prime" : "is not Prime");
  }
}

//  Test Case
printPrime(0, 20);
