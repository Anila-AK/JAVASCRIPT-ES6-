// ability to provide same functions from super to child class

class A {
  display() {
    console.log("this is from class A");
  }
}

class B extends A {
  display() {
    console.log("this is from class B");
  }
}
// let obj = new B();
// obj.display();
let Objone=[new A(), new B()];
Objone.forEach(function (a) {
    a.display();
    
});

// let arrone= [2,3,4,5,6,7];

// arrone.forEach(function (index) {
  
//    console.log( index);
// })



