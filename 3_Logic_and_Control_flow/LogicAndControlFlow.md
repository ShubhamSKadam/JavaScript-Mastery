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

## Loops

### while loop

The while loop loops through a block of code as long as a specified condition is true.

```js
// while (condition){
// block of code;
// }

let i = 0;

// loop to display numbers from 0 to 9
while (i < 10) {
  console.log(i);
  i++;
}
```

### for loop

The for statement creates a loop with 3 optional expressions.

```js
for (expression 1; expression 2; expression 3) {
  // code block to be executed
}
// loop to display numbers from 0 to 9
for (let i = 0; i < 10; i++) {
  console.log(i);
}
```

### Switch Statement

The switch statement is used to perform different actions based on different conditions.

```js
// syntax ,
// switch (condition){
// case 'xyz':
// block of code;
// break;

// case 'abc':
// block of code;
// break;
// }
```

```js
const superHero = "Iron Man";

switch (superHero) {
  case "Captain America":
    console.log("Never give up!");
    break;

  case "Iron Man":
    console.log("I am Iron Man!"); // I am Iron Man!
    break;

  case "Thor":
    console.log("That is my hammer!");
    break;

  case "Black Widow":
    console.log("One shot, one kill");
    break;

  default:
    console.log("Enter a valid superhero name");
}
```
