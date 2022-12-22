// Array Find

// The Find method for arrays returns the
// first value that satisfies the condition

const numbers = [1, 2, 3, 4, 5, 6, 7];

const value = numbers.find((number) => number > 5);
console.log(value);

const cities = ["Bangalore", "Mumbai", "New Delhi", "Noida", "Hyderabad"];

const city = cities.find((city) => city.startsWith("N"));

console.log(city);
