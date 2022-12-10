# Crash Course on JavaScript - JS Mastery

![Javascript](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY_6xmpk2NCVs1LezEwt8U8UWIzp4NX5AFCw&usqp=CAU)

## Contents -

- Variables and Data Types
- Operators
- Logic and Control Flow
- Functions



## Variables and Data Types

 JavaScript has 3 ways of declaring a variable :

1. Using var

2. Using let

3. Using const ( Read Only )

   

There are some rules to declare variable names

1. Do not use existing JS keywords
2. Name must begin with a letter
3. Names are case sensitive
4. You cannot use any special character while naming a variable other then _ and $

```js
var variableName = "Welcome to Variables";

// updating the variable
variableName = "Hello World";

```



### Strings

String is a datatype used to represent text.

```js
const exampleString = "Hello, World!";
```

There are 3 ways of representing a string:

- Single Quotes

- Double Quotes

- Backticks

  

We can use Single Quote or Double Quote if we just want to statically display it.

```js
const singleQuote = 'Hello';
const doubleQuote = "Hello";
```



We can use Backtick for extended functionality such as dynamically changing it when required.

```js
const userName = "Shubham";
const backTick = `Hello, ${userName}`;
console.log(backTick); // 'Hello, Shubham'
```

 '${}' this is called a template literal.



### Numbers

Numbers - Integers , Fractions.

```javascript
const firstNumber = 12;
const secondNumber = 27;

const result = firstNumber + secondNumber;

console.log(result); // '39'
```



### Booleans

Boolean - True / False.

```js
const age = 22;

if (age >= 18) {
  console.log("You are Good to drive"); // You are Good to drive
} else {
  console.log("You are very young to drive");
}
```



### Null and Undefined

The null value represents the intentional absence of any object value.

```js
const age = null;
console.log(age) // null
```

when you don't assign any value to the variable then it becomes undefined.

```js
let firstName;
console.log(firstName); // undefined
```



### Objects

An object is a collection of properties, and a property is an association between a name (or key) and a value. A property's value can be a function, in which case the property is known as a method.

```js
const Person = {
  name: "Shubham",
  age: 21,
};

console.log(typeof Person); //  object

const arr = [1, 2, 3, 4];
console.log(typeof arr); // object

// date is an object;
const date = new Date();
console.log(typeof date); // object
```



## Operators

### Arithmetic Operators

```js
const a = 5;
const b = 10;
let result = 0;

// Addition
result = a + b;

// Subtraction
result = a - b;

// Multiplication
result = a * b;

// Division
result = a / b;

// Exponent
result = a ** b;

// Modulo
result = a % b;

// Increment and Decrement
result++;
result--;
```



### Comparison Operators

Comparison Operators returns true / false.

```js
const a = 5;
const b = 10;

// Greater than
console.log(a > b); // false

// Greater than equal to
console.log(a >= b); // false

// Less than
console.log(a < b); // true

// Less than equal to
console.log(a <= b); // true

// Loose equality
// Doesn't compare the DATA TYPES
console.log(a == b); // false

// Not equal
console.log(a != b); //true

// Strict Equality
// Compares VALUES and DATA TYPES
// Returns true only if both are the same
console.log(a === b); //false

// Strict Inequality
console.log(a !== b); //true
```



### Logical Operators

Logical operators are used to determine the logic between variables or values.

```js
// Logical Operators

// AND && => ALL OPERANDS ARE TRUE => TRUE
console.log(true && true && true); // true

// OR || => ATLEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false); // true

// NOT ! => Reverses the Boolean value
console.log(!true); // false
```

```js
// The below line of code outputs 999,
// because it evaluates from left to right and
// it returns the last true value in the condition
console.log("truthy" && 1 && "test" && 999); // 999

// The below line of code outputs 0,
// because there is one false value in the
// entire condition and it will always return 0
console.log("truthy" && 0 && "test" && 999); // 0

// For OR operator
// The below line returns "truthy" because,
// when the first value of the condition is true,
// it doesn't check rest of the values.
console.log("truthy" || 0 || "test" || 999); // truthy

// The below line returns undefined,
// because it checks all the values and
// when all values are false, it returns the last one
console.log("" || 0 || null || undefined); // undefined
```



### Assignment Operator

An assignment operator assigns a value to its left operand based on the value of its right operand.

```js
let num = 34;
num += 2;
console.log(num); // 36
```



## Logic and Control Flow

### Conditional Statements

Conditional statements are used to perform different actions based on different conditions.

```js
// if, else and else if

const age = 8;

if (age > 18) {
  console.log("You may enter");
} else if (age === 18) {
  console.log("Welcome, You just turned 18!");
} else {
  console.log("Grow up"); // Grow up
}
```



FALSY VALUES - Excluding them all other values are TRUTHY VALUES

- false
- 0
- ''
- null
- undefined
- NaN

SOME TRUTHY VALUES

- true
- 1
- "hello"
- 27 (any number)
- {} - empty object is also considered to be true
- [] - empty array is also considered to be true

```js
const stars = 5;

if (stars) {
  console.log(`Congrats, you have ${stars} stars`); // Congrats, you have 5 stars
} else {
  console.log("You don't have any stars");
}
```



#### Ternary Operator

```js
// Syntax ,
// (condition) ? // true : // false
const age = 1;
age > 18 ? console.log("You may drive") : console.log("You cannot drive yet!");
// You cannot drive yet!
```



## Functions

A BLOCK OF CODE ==> PERFORMS A TASK

There are multiple ways of function declaration.

```js
 function square(number) { // Function declaration
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

const sayHi = function(name){
    console.log(`Hello, ${name}`);
}

sayHi('Shubham');
```



#### An arrow Function

A modern way of writing functions in JavaScript.

```js
// const varName = (params) => {
// statements
// };

const sayHi = (name) => {
	console.log(`Hello, ${name}`)
}

sayHi('Shubham');
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
// By default we can make the value of age will be 0, to avoid undefined as a result when age is not being passed.
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
// Declaring a variable with var inside a blockscope can also let you access the variable in global scope. 
```

