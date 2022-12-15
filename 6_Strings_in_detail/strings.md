## Strings

There  are 3 types of Strings :

- Strings with single quotes
- Strings with double quotes
- Strings with Backticks

```js
// Strings wrapped up with single and double quotes are just plain txt
const single = "Hi, this is a normal text";
const double = "Hi, this is also a normal text";

// String wrapped inside a backtick has extended functionality
const backTick = `An extended Functionality provided to strings`;

const sum = (a, b) => a + b;

console.log(`I want to add ${sum(3, 4)}`);

```

#### How to get the length of the Strings ?

We can use the .length property to get the length of the string.  

```js
const firstName = "You are a good person";

const firstLetter = firstName[0];
const lastLetter = firstName[firstName.length - 1];

console.log(firstLetter, lastLetter);
```

