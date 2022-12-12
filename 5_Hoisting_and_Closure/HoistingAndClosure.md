### Hoisting

Bringing the variables to the top of the scope.

Only the variable declaration gets to the top.

```js
console.log(age); // undefined will be displayed
var age = 12;
```

```js
hoist();

// The function will be executed even
// if the function call is done before the function declaration
function hoist() {
  var message = "test";
  console.log(message); // test
}
```

With modern JavaScript we can avoid Hoisting, in the below code we are making use of let and const.

```js
console.log(age); // undeclared error
console.log(num); // undeclared num
let age = 32;
let num = 23;
```

```js
hoist();

const hoist = () => {
  // reference error
  var message = "test";
  console.log(message);
};
```
