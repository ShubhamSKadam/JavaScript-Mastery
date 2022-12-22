// Array Find

// The Find method for arrays returns the
// first value that satisfies the condition

const numbers = [1, 2, 3, 4, 5, 6, 7];

const value = numbers.find((number) => number > 5);
console.log(value);

const cities = ["Bangalore", "Mumbai", "New Delhi", "Noida", "Hyderabad"];

const city = cities.find((city) => city.startsWith("N"));

console.log(city);

// Array Includes
const movies = ["Avengers", "Superman", "Batman"];

if (movies.includes("Avengers")) {
    console.log("The movie is available on prime");
} else {
    console.log("The movie is not available on prime.");
}
