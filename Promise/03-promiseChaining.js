// Promise Chaining
// promise that does more than one return type (tasks)

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     resolve(2);
//     // reject("something went wrong");
//   }, 1000);
// })
//   .then(function(result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function(result) {
//     console.log(result);
//     return result * 2;
//   })
//   .then(function(result) {
//     console.log(result);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

//code question
/* 
use promise to solve this issue 
1. we need to enrole student to outdoor class 
student must be age 15 or older
student must be weight 40lb or lower

by using promise you need to inform that student is eligible or not. 
if he is not eligible ou need to print why and the createria does not met the requirement
use promise then catch and finally
  */

let age = 15;
let weight = 10;
new Promise(function(resolve, reject) {
  if (age >= 15 && weight >= 40) {
    console.log("student is eligible....");
  } else if(age<15){
    studentnoteligible = new Error("student is not eligible due to age");
    reject(studentnoteligible);
  }else
   {
    studentnoteligible = new Error("student is not eligible due to weight");
    reject(studentnoteligible);
  }
})
  .then(function(res) {
    return res;
  })
  .catch(function(error) {
    console.log("ineigible due to age");
    return error;
  })
  .catch(function(error) {
    console.log("ineigible due to weight");
    return error;
  })
  .finally(function() {
    console.log("Task is done");
  });
