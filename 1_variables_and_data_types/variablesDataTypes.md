## Variables and Data Types

JavaScript has 3 ways of declaring a variable :

1. Using var

2. Using let

3. Using const ( Read Only )

There are some rules to declare variable names

1. Do not use existing JS keywords
2. Name must begin with a letter
3. Names are case sensitive
4. You cannot use any special character while naming a variable other then \_ and $

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
const singleQuote = "Hello";
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
console.log(age); // null
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