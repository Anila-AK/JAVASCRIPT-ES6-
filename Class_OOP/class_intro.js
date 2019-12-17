// syntax for class
class Myclass {
  // class method
  constructor() {}
  function() {} // can create as many function you want
}

//i want to create class called User  and print args as name and print username

//class always needs a constractor because class is design and constructor which will create actual product class
class User {
  // never have name (it has defualt name)
  //never have any return type
  constructor(name, id) {
    this.name = name;
    this.id = id;
  }
  // this is a function we didn't use function word because class is fun and it cannot have fun as word within it
  welcome() {
    console.log(this.name);
    console.log(this.id);
  }
}

let userOne = new User("Anila", 23);
//calling class through constructor and constructor can have many args and a class can only one constructor
userOne.welcome();

//class and object type using ES5

// console.log(User == User.prototype.constructor);
// ​function Car(model, wheels) {
//   this.model = model;
//   this.wheels = wheels;
// }
// Car.prototype.printModel = function() {
//   console.log(this.model);
// };
// let carOne = new Car("Model X");
// console.log(carOne);
// carOne.printModel("Model Y");
// ​
// console.log(Car("Honda"));
// ​
// Car.prototype.printWheels = function() {
//   console.log(this.wheels);
// };

// How to use Class and expression
let person = class {
  constructor(personName) {
    this.personName = personName;
  }
  printNAme() {
    return this.personName;
  }
};
console.log(new person("SomeName").printNAme());

// class as expression in function

function getInfo(info, x) {
  return class {
    printInfo() {
      console.log(info);
    }
    someinfo() {
      console.log(x);
    }
  };
}

let info1 = getInfo("args", "hhhh");
new info1().printInfo();
new info1().someinfo();
