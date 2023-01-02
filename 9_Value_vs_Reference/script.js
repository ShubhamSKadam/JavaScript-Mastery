// const animals = ["dogs", "cats"];

// const otherAnimals = animals;

// animals.push("pig");

// console.log(animals); // [ 'dogs', 'cats', 'pig' ]
// We get the same output for otherAnimals too,
// because the otherAnimals is also referencing the same memory
// as the animals.
// console.log(otherAnimals); // [ 'dogs', 'cats', 'pig' ]

// Cloning Arrays
// 1st way : Spread Operator
const numbers = [1, 2, 3, 4];
const copiedNumbers = numbers;

// Using spread Opeator,
// Also known as Shallow Cloning
const newNumbers = [...numbers];

numbers.push(5);
console.log(numbers);  // [ 1, 2, 3, 4, 5 ]
console.log(copiedNumbers); // [ 1, 2, 3, 4, 5 ]
console.log(newNumbers); // [ 1, 2, 3, 4 ]
