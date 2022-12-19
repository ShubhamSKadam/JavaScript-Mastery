// const numbers = [2, 4, 6, 8];

// numbers.forEach((value, i) => console.log(value, i));

// when to use forEach :
// You want to do something with each element in the array

// Don't use when :
// You want to stop or break the loop when some condition is true.
// When you are working with async code.

// let sum = 0;
// numbers.forEach((value) => (sum += value));
// console.log(sum);

const inventory = [
    { price: 7, name: "egg" },
    { price: 10, name: "lays" },
    { price: 12, name: "maggie" },
];

// Array Map
const prices = inventory.map((item) => console.log(item.price));
const names = inventory.map((item) => console.log(item.name));
