// Arrow function

const square = (number) => {
  return number * number;
};

// A short hand to declare arrow function if there is just one statement in the function:
const square1 = (number) => number * number;

const result = square(3);
console.log(result);

// Difference between parameters and arguments
// Paramters => used when defining a function
// Arguments => passed when making a function call
// E.g.

const sayHi = (name, age = 0) => {
  // By default the we can make value of age will be 0, to avoid undefined as a result when age is not being passed.

  // name is a paramter
  console.log(`Hi ${name}, you are ${age} years old!`);
};

sayHi("Shubham"); // 'Shubham' is an argument value that is being passed
