// sets

const exampleSet = new Set([1, 1, 1, 1, 1, 2, 2, 2, 2, 1]);
exampleSet.add(5).add(3);

exampleSet.delete(5); // -> returns boolean
console.log(exampleSet.has(5));
console.log(exampleSet); // -> Set(2) { 1, 2 }
