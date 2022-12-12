// Closures in JavaScript

// const outer = () => {
//   const outerVar = "Hello";

//   const inner = () => {
//     const innervar = "Hi";
//     console.log(outerVar, innervar);
//   };
//   return inner;
// };

// const innerFunc = outer();

// innerFunc();

const init = () => {
    const hobby = "Learning JavaScript"; // Local variable created by init function

    const displayHobby = () => {
        // displayHobby is the inner function, a closer
        console.log(hobby); // using  a variable created in the parent function
    };

    displayHobby();
};

init();
