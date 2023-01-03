### Hoisting

In JavaScript, hoisting is the behavior of moving declarations to the top of the current scope. In other words, when the code is executed, declarations are processed before any code is executed. This means that you can use a variable or function before it has been declared.

For example, consider the following code:

```js
Copy codeconsole.log(x);  // undefined
var x = 10;
```

Even though `x` is defined on the second line, it is still accessible on the first line because of hoisting. The declarations are moved to the top of the current scope, so the code is effectively rewritten as:

```js
Copy codevar x;
console.log(x);  // undefined
x = 10;
```

This behavior is specific to declarations (e.g. `var`, `let`, and `const`). Assignments and other code are not affected by hoisting.

It is generally a good idea to declare all variables at the top of their respective scopes to avoid any confusion or unexpected behavior related to hoisting.

```js
hoist();

// The function will be executed even
// if the function call is done before the function declaration
function hoist() {
  var message = "test";
  console.log(message); // test
}
```

With modern JavaScript we can avoid Hoisting, in the code below we are making use of let and const.

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

### Closure

In JavaScript, a closure is a function that has access to the outer (enclosing) function's variables—scope chain—even after the outer function has returned.

Here is an example of a closure in JavaScript:

```js
function outerFunction(x) {
  return function innerFunction(y) {
    return x + y;
  }
}

const add5 = outerFunction(5);
console.log(add5(3));  // 8
```

In this example, the `innerFunction` has access to the `x` variable from the outer function even after the outer function has returned. The `innerFunction` is said to close over the variables from the outer function.

Closures are often used to create private variables in JavaScript. For example:

```js
function counter() {
  let count = 0;
  return function() {
    return ++count;
  }
}

const myCounter = counter();
console.log(myCounter());  // 1
console.log(myCounter());  // 2
```

In this example, the `count` variable is not accessible from outside the `counter` function, but the inner function returned by `counter` has access to it. This allows the inner function to maintain state across multiple invocations.

Closures are an important concept in JavaScript and are commonly used in many different types of code.

```js
const outer = () => {
  const outerVar = "Hello";

  const inner = () => {
    const innervar = "Hi";
    console.log(outerVar, innervar);
  };
  return inner;
};

const innerFunc = outer();

innerFunc();
```

```js
const init = () => {
    const hobby = "Learning JavaScript"; // Local variable created by init function

    const displayHobby = () => {
        // displayHobby is the inner function, a closer
        console.log(hobby); // using  a variable created in the parent function
    };

    displayHobby();
};

init();
```

