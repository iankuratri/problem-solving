/**
 * Question: Create a function to achieve functionality shown below:
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
