// The below line of code outputs 999,
// because it evaluates from left to right and
// it returns the last true value in the condition
console.log("truthy" && 1 && "test" && 999);

// The below line of code outputs 0,
// because there is one false value in the
// entire condition and it will always return 0
console.log("truthy" && 0 && "test" && 999);

// For OR operator
// The below line returns "truthy" because,
// when the first value of the condition is true,
// it doesn't check rest of the values.
console.log("truthy" || 0 || "test" || 999);

// The below line returns undefined,
// because it checks all the values and
// when all values are false, it returns the last one
console.log("" || 0 || null || undefined);

// NOT operator
const value = "";

if (!!value) {
  console.log("Value is truthy");
} else {
  console.log("Value is falsy");
}
