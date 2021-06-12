/**
 * Question: Create a function to achieve functionality shown below:
 * sum(1)(2)(3)() = 6
 *
 * */

function sum(init) {
  let total = init;

  return function add(input) {
    if (input !== undefined) {
      total = total + input;
      return add;
    }

    return total;
  };
}

console.log(sum(1)(2)(5)());
