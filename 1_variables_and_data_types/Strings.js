// Strings
// String is a dataype used to represent text
const exampleString = "Hello, World!";

console.log(exampleString);

// There are 3 ways of representing a string

const singleQuote = "Hello";
const doubleQuote = "Hello";
// We can use singleQuote or doubleQuote if we just want to statically display it.

const userName = "Shubham";
// We can use backTick for extended functionality such as dynamically changing it when required.
// ${} this is called a temperate literal
const backTick = `Hello, ${userName}`;

console.log(backTick);

const exampleBackTick = `${3 + 2}`;

console.log(exampleBackTick);
