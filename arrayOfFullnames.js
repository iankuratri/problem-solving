/**
 * Array of Fullnames
 *
 * Given an array (persons) of objects where each object contains the firstname and lastname of a person,
 * return an array that contains the fullname of each person.
 */

function fullNames(persons) {
  return persons.map((person) => `${person.firstname} ${person.lastname}`);
}

// Test Case
const persons = [
  { firstname: "Bruce", lastname: "Wayne" },
  { firstname: "Clark", lastname: "Kent" },
];

console.log(fullNames(persons)); // Returns ['Bruce Wayne', 'Clark Kent']
