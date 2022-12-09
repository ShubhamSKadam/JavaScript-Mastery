// Functions
// A BLOCK OF CODE ==> PERFORMS A TASK

// There are multiple ways of function declaration,
// A function declaration(defining a fuction)
// function name(params){
// statements
//}
// The advantage of using a function declaration is having an access
// to 'this' keyword.

// A function expression
// const name = function(params){
//statements
// }

// A arrow function
// const name = (params) => {
  // statements
// };

// function square(number) {
  // return number * number;
// }

// FUNCTION CALL (calling / executing a function)
// const ans = square(6);
// console.log(ans);

function sayHi(name){
  console.log(`Hi, ${name}`);
}

sayHi('Shubham');
