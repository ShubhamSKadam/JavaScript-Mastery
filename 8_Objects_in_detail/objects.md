## Objects in detail

#### Creating an Object

```js
// object is an unordered collection
// of related date in form of
// key value pair

const person = {
    firstName: "Shubham",
    lastName: "Kadam",
    age: 23,
    car: {
        brand: "Mercedes",
        year: 2020,
    },
};
```

#### The Dot and Square Notation

```
// Dot notation
const person = {
    firstName: "Shubham",
};

person.dog = {
    name: "fluffy",
    age: 2,
};

person.age = 23; // Age is being added in person object
console.log(person.dog.age);  // 2

// Square bracket notation
const property = "age";

console.log(person[property]); // 23
```

