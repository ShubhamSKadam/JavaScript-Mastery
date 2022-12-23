// Array Find

// The Find method for arrays returns the
// first value that satisfies the condition

// const numbers = [1, 2, 3, 4, 5, 6, 7];

// const value = numbers.find((number) => number > 5);
// console.log(value);

// const cities = ["Bangalore", "Mumbai", "New Delhi", "Noida", "Hyderabad"];

// const city = cities.find((city) => city.startsWith("N"));

// console.log(city);

// // Array Includes
// const movies = ["Avengers", "Superman", "Batman"];

// if (movies.includes("Avengers")) {
//     console.log("The movie is available on prime");
// } else {
//     console.log("The movie is not available on prime.");
// }

// Array sort => Alphabetically,
// doesn't sort numbers
// This sort method mutates the original array
// const names = ["Shubham", "Aditya", "Divyanshi", "Samarth"];
// names.sort();
// console.log(names);

// const numbers = [4, 12, 8, 5, 1];

// Ascending order
// numbers.sort((a, b) => a - b);
// console.log(numbers);

// Descending order
// numbers.sort((a, b) => b - a);
// console.log(numbers);

// const array = [1, 2, 3, 4, 5];

// Array Some => returns true if atleast one element passes the test
// console.log(array.some((number) => number > 5)); // false

// Array Every => return true if all elements pass the test
// console.log(array.every((number) => number > 0)); // true

// Array Reduce

const groceryList = [29, 12, 45, 35, 87, 110];

const total = groceryList.reduce((total, price) => total + price, 0);

console.log(total); // 318
