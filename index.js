// Challenge - For Of Loop

// Using the For of Loop, iterate through the array and print into the console, a message like:
// Tom lives in Lisbon

const students = [
  { name: "John", city: "New York" },
  { name: "Peter", city: "Paris" },
  { name: "Kate", city: "Sidney" },
];

for (const student of students) {
  const { name, city } = student; // Object destructuring refer to branch 3
  console.log(`${name} lives in ${city}`);
}
