let contacts = ["Mary", "Joel", "Danny"];
// let personalFriends = contacts;
let personalFriends = ["David", ...contacts, "Lily"]; // makes a new copy, maitains the concept of immitibility

contacts.push("John");

console.log(personalFriends);

let person = {
  name: "Adam",
  age: 25,
  city: "Manchester",
};

let employee = {
  ...person,
  salary: 50000,
  position: "Software Developer",
};

console.log(employee);
