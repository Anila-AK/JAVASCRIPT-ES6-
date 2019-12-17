// Create obj or class or function and only allow to modify the value vai GET and SET method...
class Employee {
  constructor(name) {
    //this is will invoke setter..
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    if (value.length < 2) {
      console.log("Name is too sort");
    } else {
      this._name = value;
    }
  }
}
let empOne = new Employee("John");
console.log(empOne.name);
empOne = new Employee("a");
class Student {
  constructor() {
    // let name;
    // let id;
  }
  // Getter Setter must declare for each variable
  getName() {
    return this.name;
  }
  setName(name) {
    this.name = name;
  }
}
let stuOne = new Student();
console.log(stuOne);
stuOne.setName("StuOne");
console.log(stuOne.getName());
console.log(stuOne);
stuOne.setName("mike");
console.log(stuOne.getName());
console.log(stuOne);

// Encapsulation will have a get and set function.
//it does not restrict the object creation

class Animal {
  constructor(canMove, canSpeak) {
    this.canMove = canMove;
    this.canSpeak = canSpeak;
  }
}

let Dog = new Animal("run", "bark");
console.log(Dog);

class Lunch {
  getMainDish() {
    return this.myMainDish;
  }
  setMainDish(myMainDish) {
    this.myMainDish = myMainDish;
  }
  getDrink() {
    return this.drink;
  }
  setDrink(drink) {
    this.drink = drink;
  }
}

let LunchOne = new Lunch();
LunchOne.setDrink("soda");
console.log(LunchOne.getDrink);

class Customer {
  constructor(name, id) {
    if (id != "" && name != "") {
      this.name = name;
      this.id = id;
    }
  }
  // suppose we have getter setter for DOB phone etc

  getDOB() {
    return this.dob;
  }
  setDOB(dob) {
    this.dob = dob;
  }
}
let cusone = new Customer("anila", "01");
console.log(cusone.setDOB("01/12/1995"));
