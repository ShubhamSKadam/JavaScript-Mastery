// Asynchronous Code

// setInterval
// clearInterval
// const myInterval = setInterval(() => console.log("Hello, world!"), 2000);
// clearInterval(myInterval);

// setTimeout
// clearTimeout
// const myTimeout = setTimeout(() => console.log("Lets play"), 5000);

// console.log("logging in the bottom");

// Synchronous Code
// const functionOne = () => {
//     console.log("Function One"); // 1

//     functionTwo();

//     console.log("Function One, Part two"); // 3
// };

// const functionTwo = () => {
//     console.log("Function two"); // 2
// };

const functionOne = () => {
    console.log("Function One"); // 1

    functionTwo();

    console.log("Function One, Part two"); // 2
};

const functionTwo = () => {
    setTimeout(() => console.log("Function two"), 2000); // 3
};

functionOne();
