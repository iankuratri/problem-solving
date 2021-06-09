/**
 * Question: Create a function to achieve functionality shown below:
 * sum(1)(2)(3)() = 6
 *
 * */

function sum(init) {
  return function (number) {
    if (number) {
      return sum(init + number);
    }

    return init;
  };
}

console.log(sum(1)(2)(5)());
