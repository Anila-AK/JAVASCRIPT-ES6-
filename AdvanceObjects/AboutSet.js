// set object provides
// add(), clear(), delete(), eformEach(), has(), values()

//Remember about set always :
// 1. Set object user key as internal ... cannot set the key ..
// 2. Set Object alwasy store unique values
// 3. Set object provides itreations to read or modify the values

let id = new Set([11, 22, 33, 44, 11]);
// takes first value and ignore/remove the duplicated values
console.log(id);
console.log(typeof id);
console.log(id instanceof Set);

let skills = new Set(["html"]);
skills.add(["css", "dvd"]);
skills.add("JS");
skills.add("BT-4").add("REACT"); //chaining add methods
console.log(skills);

//how to read each value from the object
for (const key of skills) {
  console.log(key);
}

// even can use conditions within the loop to print one by one the required ones (Iterate through the set )
for (const key of skills) {
  if (key == "css") {
    console.log("this is CSS value");
  } else {
    console.log(key);
    //tells the size of the object
  }
}
console.log(skills.size);

//simple for loop

for (let index = 0; index < skills.size; index++) {
  // console.log(index);
  // console.log(skills[index]);
}

//clear
// skills.clear();
// console.log(skills);

//delete
skills.delete("html");
console.log(skills);

//entries  ...
let itreator = skills.entries();
for (let i = 0; i < skills.size; i++) {
  console.log(itreator.next().value);
}

// let name= "hhhh";
// let idss ="12";
// let empName=JSON(name)
// let EmpID= JSON(idss);
// let emp= new Set();
// emp.add(EmpID);
// emp.add(empName);
// console.log(emp);

// .forEach() ........ its callnack function ...passing v1, v2..

let nameList = new Set(["mike", "ali", "john", "butt"]);
console.log(nameList);
// to fetch data
//foreach takes fun as args and within fun we need to pass three values (v1,v2,name of set)
nameList.forEach(function(key, value, nameList) {
  //   console.log("key:" + key);
  //   console.log("value: " + value);
  response = { key, value };
  console.log(response);

  //has() checks the set and verify element is existing or not ... true or false
  console.log(nameList.has("mike"));
  console.log(nameList.has("anna"));
  console.log(nameList.values());
});
