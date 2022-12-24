// object is an unordered collection
// of related date in form of
// key value pair

// const person = {
//     firstName: "Shubham",
//     lastName: "Kadam",
//     age: 23,
//     car: {
//         brand: "Mercedes",
//         year: 2020,
//     },
// };

// console.log(person);

// Dot notation
const person = {
    firstName: "Shubham",
};

person.dog = {
    name: "fluffy",
    age: 2,
};

person.age = 23;
console.log(person.dog.age);

// Square bracket notation
const property = "age";

console.log(person[property]);
