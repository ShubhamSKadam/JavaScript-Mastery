## Functions

A BLOCK OF CODE ==> PERFORMS A TASK

There are multiple ways of function declaration.

```js
function square(number) {
  // Function declaration
  return number * number;
}

// FUNCTION CALL (calling / executing a function)
const ans = square(6);
console.log(ans); // 36
```

The advantage of using a function declaration is having an access to 'this' keyword.

#### A function expression

Another way of declaring a function.

```js
// const varName = function(params){
//statements
// }

const sayHi = function (name) {
  console.log(`Hello, ${name}`);
};

sayHi("Shubham");
```

#### An arrow Function

A modern way of writing functions in JavaScript.

```js
// const varName = (params) => {
// statements
// };

const sayHi = (name) => {
  console.log(`Hello, ${name}`);
};

sayHi("Shubham");
```

```js
const square = (number) => {
  return number * number;
};

// A short hand to declare arrow function if there is just one statement in the function:
const square1 = (number) => number * number;
```

#### Parameters and Arguments

Parameters are used when defining a function

Arguments are passed when making a function call.

```js
const sayHi = (name, age = 0) => {
  // By default we can make the
  // value of age to be 0
  // to avoid undefined as a
  // result when age is not being passed.
  // name and age are parameters here
  console.log(`Hi ${name}, you are ${age} years old!`); // Hi Shubham, you are 0 years old.
};

sayHi("Shubham"); // 'Shubham' is an argument that is being passed
```

### Scope

There are three types of Scope :

1. Global Scope
2. Function Scope
3. Block Scope

#### Global Scope

the global scope is the scope that contains, and is visible in, all other scopes.

```js
const firstName = "Shubham";
const GlobalScope = () => {
  console.log(firstName); // Shubham
};

GlobalScope();
```

#### Local Scope

Local variables have Function Scope. They can only be accessed from within the function.

```js
const someFunction = () => {
  let firstName = "John";
  console.log(firstName); // John

  const someFunction2 = () => {
    console.log(firstName); // John
  };

  someFunction2();
};

someFunction();
```

#### Block Scope

This scope restricts the variable that is declared inside a specific block, from access by the outside of the block.

```js
if (true) {
  var firstName = "Jane";
}

console.log(firstName);
// Declaring a variable with var
// inside a blockscope can also let
// you access the variable in global scope.
```
