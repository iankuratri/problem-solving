/**
 * Union Intersection Difference
 *
 * Given two arrays (arr1) and (arr2) return the
 * union,
 * intersection,
 * difference and
 * symmetric difference
 * of the two arrays.
 */

function union(arr1, arr2) {
  return [...arr1, ...arr2];
}

function intersection(arr1, arr2) {
  return arr1.filter((element) => arr2.includes(element));
}

function difference(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}

function symmetricDifference(arr1, arr2) {
  return [...difference(arr1, arr2), ...difference(arr2, arr1)];
}

const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];

console.log(union(arr1, arr2)); // Returns [1, 2, 3, 2, 3, 4];

console.log(intersection(arr1, arr2)); // Returns [2, 3];

console.log(difference(arr1, arr2)); // Returns [1];

console.log(difference(arr2, arr1)); // Returns [4];

console.log(symmetricDifference(arr1, arr2)); // Returns [1, 4];
