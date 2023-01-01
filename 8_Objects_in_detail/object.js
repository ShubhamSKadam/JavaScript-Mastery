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
// const person = {
//     firstName: "Shubham",
// };

// person.dog = {
//     name: "fluffy",
//     age: 2,
// };

// person.age = 23;
// console.log(person.dog.age);

// Square bracket notation
// const property = "age";

// console.log(person[property]);

// Object.keys() creates an array containg the keys of an object.

// Intialize an object
const employee = {
    boss: "Shubham",
    secretary: "Samarth",
    sales: "John",
    accountant: "Oscar",
};

// Let's say we want to see all the positions(keys) in the employee object
const positions = Object.keys(employee);
console.log(positions);

// Object.values() creates an array containg the values of an object.
const session = {
    id: 1,
    time: `26-July-2022`,
    device: "Mobile",
    browser: "Chrome",
};

const sessionInfo = Object.values(session);
console.log(sessionInfo);

// Object.entries() creates an array containg the key/value of an object.
const operatingSystem = {
    name: "Ubuntu",
    version: "20.04",
    license: "Open Source",
};

const entries = Object.entries(operatingSystem);

entries.forEach((entry) => {
    let key = entry[0];
    let value = entry[1];

    console.log(`${key}:${value}`);
});

// Object.freeze() prevents modification to
// properties and values of an object,
// and prevents properties from being
// added or removed from an object

// Intialize an object
// const user = {
//     username: "Shubham",
//     password: "12345",
// };

// const admin = Object.freeze(user);

// user.username = "Samarth"; // Trying to overwrite the object username
// console.log(user.username); // Shubham (remains the same);

// Object.seal() prevents new properties
// from being added to an object,
// but allows the modification of existing properties
// Intialize an object

const user = {
    username: "Shubham",
    password: "12345",
};

const newUser = Object.seal(user);

newUser.username = "Samarth"; // The username will be changed
newUser.age = 23; // the age property will not be added because we applied Object.seal()

console.log(user);
