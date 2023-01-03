#### Copy by Reference

```js
const animals = ["dogs", "cats"];

const otherAnimals = animals;

animals.push("pig");

console.log(animals); // [ 'dogs', 'cats', 'pig' ]
console.log(otherAnimals); // [ 'dogs', 'cats', 'pig' ]
```

The first block of code demonstrates how variables in JavaScript can be copied by reference, rather than by value. When you assign an array or object to a new variable, the new variable is simply a reference to the original array or object. This means that any changes made to the original array or object will also be reflected in the copied variable, because they are both pointing to the same memory location.

#### Shallow Cloning

```js
// Cloning Arrays
// 1st way : Spread Operator
const numbers = [1, 2, 3, 4];
const copiedNumbers = numbers;

const newNumbers = [...numbers];

numbers.push(5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(copiedNumbers); // [ 1, 2, 3, 4, 5 ]
console.log(newNumbers); // [ 1, 2, 3, 4 ]

// 2nd way : Array.slice()
const numbers = [1, 2, 3, 4];
const copiedNumbers = numbers;

const newNumbers = numbers.slice();

numbers.push(5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(copiedNumbers); // [ 1, 2, 3, 4, 5 ]
console.log(newNumbers); // [ 1, 2, 3, 4 ]

```

```js
// Cloning Objects
// 1st way : Spread Operator
const person = { name: "John", age: 22 };
const newPerson = { ...person };

person.age = 23;
console.log(person); // { name: 'John', age: 23 }
console.log(newPerson); // { name: 'John', age: 22 }

// 2nd way : Object.assign()
const person = { name: "John", age: 22 };
const newPerson = Object.assign({}, person);

person.age = 23;
console.log(person); // { name: 'John', age: 23 }
console.log(newPerson); // { name: 'John', age: 22 }
```

 A shallow copy is a copy that only includes the top-level properties of the original array or object, rather than copying all nested properties as well.

The first way to create a shallow copy is to use the spread operator (`...`). This creates a new array or object with the same properties as the original, but they are not nested. The second way to create a shallow copy is to use the `Array.slice()` or `Object.assign()` methods. These methods work similarly to the spread operator, but they are more specific to arrays and objects, respectively.

#### Deep Cloning

```js
// Deep Cloning
const person = {
    name: "Shubham",
    car: {
        brand: "BMW",
        color: "blue",
        wheels: 4,
    },
};

const newPerson = JSON.stringify(person);

const updatedPerson = JSON.parse(newPerson);

updatedPerson.car.color = "red";
console.log(person); // { name: 'Shubham', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log(updatedPerson); // { name: 'Shubham', car: { brand: 'BMW', color: 'red', wheels: 4 } }
```

 A deep copy is a copy that includes all nested properties of the original object, rather than just the top-level properties.

To create a deep copy, the code uses the `JSON.stringify()` and `JSON.parse()` methods. `JSON.stringify()` converts an object to a JSON string, which is a format that can be easily stored or transmitted. `JSON.parse()` converts a JSON string back into an object.

By using these methods, the code is able to create a deep copy of the original object, which can be modified independently without affecting the original object.
