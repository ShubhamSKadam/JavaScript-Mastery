// const numbers = [2, 4, 6, 8];

// numbers.forEach((value, i) => console.log(value, i));

// when to use forEach :
// You want to do something with each element in the array

// Don't use when :
// You want to stop or break the loop when some condition is true.
// When you are working with async code.

// let sum = 0;
// numbers.forEach((value) => (sum += value));
// console.log(sum);

// const inventory = [
//     { price: 7, name: "egg" },
//     { price: 10, name: "lays" },
//     { price: 12, name: "maggie" },
// ];

// Array Map
// const prices = inventory.map((item) => console.log(item.price));
// const names = inventory.map((item) => console.log(item.name));

// Array filter
// const numbers = [2, 5, -2, 0, -5, 1];

// const positiveNumbers = numbers.filter((number) => number >= 0);
// console.log(positiveNumbers);

// const negativeNumbers = numbers.filter((number) => number <= 0);
// console.log(negativeNumbers);

const employeesData = [
    { name: "Shubham", overtime: 5 },
    { name: "Samarth", overtime: 7 },
    { name: "Seema", overtime: 8 },
];

const employeesToReward = employeesData.filter(
    (employee) => employee.overtime >= 7
);

const employeeNames = employeesToReward.map((employee) => employee.name);

employeeNames.forEach((user)=>{
      console.log(`Congratulations, ${user}`);
})