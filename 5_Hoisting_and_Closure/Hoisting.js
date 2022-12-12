// Hoisting in JavaScript
// Bringing the variables to the top of the scope.
// Only the variable declaration gets to the top

// console.log(age);

// var age = 12;

// hoist();

// The function will be executed even
// if the function call is done before the function declaration
// function hoist() {
//   var message = "test";
//   console.log(message);
// }

// console.log(num);
// const num = 23;

hoist();

var hoist = () => {
  var message = "test";
  console.log(message);
};
