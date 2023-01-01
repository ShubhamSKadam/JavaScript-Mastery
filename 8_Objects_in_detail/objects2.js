const dog = {
    name: "Fluffy",
    bark: () => {
        console.log("woof,woof");
    },
};

dog.bark(); // woof,woof

// this keyword
const car = {
    name: "Lambo",
    model: 2019,
    Details: function () {
        console.log(this.name, this.model);
    },
};

car.Details(); // Lambo 2019

