// There are 3 types of strings

// Strings wrapped up with single and double quotes are just plain txt
// const single = "Hi, this is a normal text";
// const double = "Hi, this is also a normal texat";

// String wrapped inside a backtick has extended functionality
// const backTick = `An extended Functionality provided to strings`;

// const sum = (a, b) => a + b;

// console.log(`I want to add ${sum(3, 4)}`);

// How to get length of a string

// const firstName = "You are a good person";

// const firstLetter = firstName[0];
// const lastLetter = firstName[firstName.length - 1];

// console.log(firstLetter, lastLetter);

//  UPPERCASE and lowercase

// const mixedCase = "I'am really Happy Today";

// const lowerCase = mixedCase.toLowerCase();
// const upperCase = mixedCase.toUpperCase();

// console.log(upperCase);

const hobbies = "I love HTML, CSS and JavaScript, JavaScript";

// returns the index of first Occurrence of the word JavaScript
const firstIndex = hobbies.indexOf("JavaScript");
console.log(firstIndex);

// returns the index of last Occurrence of the word JavaScript
const lastIndex = hobbies.lastIndexOf("JavaScript");
console.log(lastIndex);

// includes() => Checks whether the word exists in the string.
const includesCSS = hobbies.includes("CSS");
console.log(includesCSS);

// startsWith();
console.log(hobbies.startsWith("I"));

// endsWith();
console.log(hobbies.endsWith('JavaScript'));
