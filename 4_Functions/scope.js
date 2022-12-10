// Scope
// There are 3 types of scope
// 1. Global Scope
// 2. Function Scope
// 3. Block Scope

// Global Scope
// const firstName = "Shubham";
// const GlobalScope = () => {
//   console.log(firstName);
// };

// GlobalScope();

// Local Scope

const someFunction = () => {
  let firstName = "John";
  console.log(firstName);

  const someFunction2 = () => {
    console.log(firstName);
  };

  someFunction2();
};

someFunction();

// Block Scope

if (true) {
  var firstName = "Jane";
}

console.log(firstName);

// Declaring a variable with var inside a blockscope can also let you access the variable in global scope. 