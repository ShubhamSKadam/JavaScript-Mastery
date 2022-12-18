// Arrays Introduction
// let months = ["January", "February", "March", "April"];

// for (let i = 0; i < months.length; i++) {
//     console.log(months[i]);
// }

const names = ["John", "Bob", "David", "Mark"];

// Array Push - Adds a new element containing
// the enetered value to the end of the array
names.push("Shubham");
console.log(names);

// Array Pop - Deletes the last element of an array
names.pop();
console.log(names);

// Array Shift - deletes the first element of the array
names.shift();
console.log(names);

// Array Unshift - adds the new value to the start of the array
names.unshift("Samarth");
console.log(names);

// Array Splice - It adds or removes values in any position of an array
names.splice(2, 0, "Divyanshi", "Ayushi");
console.log(names);

names.splice(2, 2);
console.log(names);

// Array Slice - Copies certain part of an array into a newly created array
const noOneLikesSam = names.slice(1);
console.log(noOneLikesSam);
