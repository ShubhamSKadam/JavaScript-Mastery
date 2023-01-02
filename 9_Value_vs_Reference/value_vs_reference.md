#### Copy by Reference

```js
const animals = ["dogs", "cats"];

const otherAnimals = animals;

animals.push("pig");

console.log(animals); // [ 'dogs', 'cats', 'pig' ]
// We get the same output for otherAnimals too,
// because the otherAnimals is also referencing the same memory
// as the animals.
console.log(otherAnimals); // [ 'dogs', 'cats', 'pig' ]

// The behaviour is same even with respect to objects.
```

#### Shallow Cloning

```js
// Cloning Arrays
// 1st way : Spread Operator
const numbers = [1, 2, 3, 4];
const copiedNumbers = numbers;

// Using spread Opeator,
// Also known as Shallow Cloning
const newNumbers = [...numbers];

numbers.push(5);
console.log(numbers); // [ 1, 2, 3, 4, 5 ]
console.log(copiedNumbers); // [ 1, 2, 3, 4, 5 ]
console.log(newNumbers); // [ 1, 2, 3, 4 ]

// 2nd way : Array.slice()
const numbers = [1, 2, 3, 4];
const copiedNumbers = numbers;

// Using spread Opeator,
// Also known as Shallow Cloning
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

#### Deep Cloning

```js
// Deep Cloning
// We can create a shallow copy of person object
// but we have to do it for all the inner objects as well.
// To solve this we can do a deep cloning where we make
// use of JSON.stringify() method

const person = {
    name: "Shubham",
    car: {
        brand: "BMW",
        color: "blue",
        wheels: 4,
    },
};

const newPerson = JSON.stringify(person);

// newPerson will be in the form of string,
// to convert it back to an object,
// we use JSON.parse();

const updatedPerson = JSON.parse(newPerson);

updatedPerson.car.color = "red";
console.log(person); // { name: 'Shubham', car: { brand: 'BMW', color: 'blue', wheels: 4 } }
console.log(updatedPerson); // { name: 'Shubham', car: { brand: 'BMW', color: 'red', wheels: 4 } }
```
