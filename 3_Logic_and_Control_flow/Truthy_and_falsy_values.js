// If condition

// if (condition){
//    block of code
// }

// const age = 8;

// if (age > 18) {
//   console.log("You may enter");
// } else if (age === 18) {
//   console.log("Welcome, You just turned 18!");
// } else {
//   console.log("Grow up");
// }

// FALSY VALUES - Excluding them all other values are TRUTHY VALUES
// false
// 0
// ''
// null
// undefined
// NaN

// SOME TRUTHY VALUES
// true
// 1
// "hello"
// 27 (any number)
// {} // empty object is also considered to be true
// [] // empty array is also considered to be true

const stars = 5;

if (stars) {
  console.log(`Congrats,you have ${stars} stars`);
} else {
  console.log("You don't have any stars");
}
