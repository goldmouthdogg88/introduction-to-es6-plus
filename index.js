let word1 = "Dylan";
let word2 = "Israel";
let num1 = 2;
let num2 = 3;
// const fullName = word1 + " " + word2; /* Cumbersome to work with */

const fullName = `${num1 + num2} ${word2}`;
console.log(fullName);

// multi lined string

// let example = "Hello \n" + "world!";

let example = `${word1}
${word2}
`;

console.log(example);
document.getElementById("example").innerText = example;
