// The new keyword
// The new keyword creates an object of num
// which then let's us access to various methods,
// like .toFixed() in the below code.
// const num = new Number(100.25);

// console.log(num.toFixed(0)); // 100

// const person = {
//     name: "John",
//     getName() {
//         console.log(this);
//     },
// };

// person.getName(); // { name: 'John', getName: [Function: getName] }

// Class is a schema for
// an object that can save
// many values

// class Person {
//     constructor(name, age, isWorking) {
//         this.name = name;
//         this.age = age;
//         this.isWorking = isWorking;
//     }
// }

// const user = new Person("John", 22, true);

// console.log(user);

// HOw can we do the same thing above using
// arrow function ?

const createPerson = (name, age, isWorking) => ({ name, age, isWorking });

const user1 = createPerson("Shubham", 23, false);
console.log(user1);//{ name: 'Shubham', age: 23, isWorking: false }
