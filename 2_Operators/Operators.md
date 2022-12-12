## Operators

### Arithmetic Operators

```js
const a = 5;
const b = 10;
let result = 0;

// Addition
result = a + b;

// Subtraction
result = a - b;

// Multiplication
result = a * b;

// Division
result = a / b;

// Exponent
result = a ** b;

// Modulo
result = a % b;

// Increment and Decrement
result++;
result--;
```

### Comparison Operators

Comparison Operators returns true / false.

```js
const a = 5;
const b = 10;

// Greater than
console.log(a > b); // false

// Greater than equal to
console.log(a >= b); // false

// Less than
console.log(a < b); // true

// Less than equal to
console.log(a <= b); // true

// Loose equality
// Doesn't compare the DATA TYPES
console.log(a == b); // false

// Not equal
console.log(a != b); //true

// Strict Equality
// Compares VALUES and DATA TYPES
// Returns true only if both are the same
console.log(a === b); //false

// Strict Inequality
console.log(a !== b); //true
```

### Logical Operators

Logical operators are used to determine the logic between variables or values.

```js
// Logical Operators

// AND && => ALL OPERANDS ARE TRUE => TRUE
console.log(true && true && true); // true

// OR || => ATLEAST ONE OPERAND IS TRUE => TRUE
console.log(true || false); // true

// NOT ! => Reverses the Boolean value
console.log(!true); // false
```

```js
// The below line of code outputs 999,
// because it evaluates from left to right and
// it returns the last true value in the condition
console.log("truthy" && 1 && "test" && 999); // 999

// The below line of code outputs 0,
// because there is one false value in the
// entire condition and it will always return 0
console.log("truthy" && 0 && "test" && 999); // 0

// For OR operator
// The below line returns "truthy" because,
// when the first value of the condition is true,
// it doesn't check rest of the values.
console.log("truthy" || 0 || "test" || 999); // truthy

// The below line returns undefined,
// because it checks all the values and
// when all values are false, it returns the last one
console.log("" || 0 || null || undefined); // undefined
```

### Assignment Operator

An assignment operator assigns a value to its left operand based on the value of its right operand.

```js
let num = 34;
num += 2;
console.log(num); // 36
```