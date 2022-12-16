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

console.log(`I want to add ${sum(3, 4)}`); // I want to add 7

```

#### Length of the String

We can use the .length property to get the length of the string.  

```js
const firstName = "You are a good person";

const firstLetter = firstName[0];
const lastLetter = firstName[firstName.length - 1];

console.log(firstLetter, lastLetter); // Y , n
```

#### Uppercase and Lowercase

To make a string Uppercase the toUpperCase() method is being called. 

To make a string Lowercase the toLowerCase() method is being called.

```js
const mixedCase = "I'am really Happy Today";

const lowerCase = mixedCase.toLowerCase();
const upperCase = mixedCase.toUpperCase();

console.log(lowerCase)// i'am really happy today
console.log(upperCase);// I'AM REALLY HAPPY TODAY
```

#### Searching for a Substring

```js
const hobbies = "I love HTML, CSS and JavaScript, JavaScript";

// returns the index of first Occurrence of the word JavaScript
const firstIndex = hobbies.indexOf("JavaScript");
console.log(firstIndex); // 21

// returns the index of last Occurrence of the word JavaScript
const lastIndex = hobbies.lastIndexOf("JavaScript");
console.log(lastIndex); // 33

// includes() => Checks whether the word exists in the string.
const includesCSS = hobbies.includes("CSS");
console.log(includesCSS); // true

// startsWith();
console.log(hobbies.startsWith("I")); // true

// endsWith();
console.log(hobbies.endsWith('JavaScript')); // true

```

#### Getting a Substring of a String

```js
const exampleString = "hotdog";

// slice() method is used to get the substring of a string
// It takes 2 arguments i.e, the start index and the end index;
const hot = exampleString.slice(0, 3);
console.log(hot); // hot

const dog = exampleString.slice(3, 6);
console.log(dog); // dog
```

#### Split a String

```js
// Using the split() method

const exampleString = "dog";

const characters = exampleString.split("");
console.log(characters); // ['d','o','g']

const allAlphabets = "The quick brown fox jumps over the lazy dog.";

const splitAllAlphabets = allAlphabets.split(" ");
console.log(splitAllAlphabets); 
// [
//   'The',   'quick',
//   'brown', 'fox',
//   'jumps', 'over',
//   'the',   'lazy',
//   'dog.'
// ]

```

#### Reverse a String

The reverse method doesn't work over strings. So we split the string so that it becomes an array. 

Now we call the reverse method to reverse the array and lastly join method to join the characters to make it a string again. 

```js
const exampleString = "test";

const reversedString = exampleString.split("").reverse().join("");
console.log(reversedString);
```

#### Repeat 

```js
const dog = "woof";
console.log(dog.repeat(5)); // woofwoofwoofwoofwoof
```

#### Trim

Trimming up unnecessary spaces in a string using the trim() method.  

```js
// trim() method
const email = "  shubhamskadam963@gmail.com ";

console.log(email); //   shubhamskadam963@gmail.com     
console.log(email.trim());// shubhamskadam963@gmail.com
```

