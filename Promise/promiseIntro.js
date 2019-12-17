//      ○ Benefits of Promises
// 1. Improves Code Readability
// 2. Better handling of asynchronous operations
// 3. Better flow of control definition in asynchronous logic
// 4. Better Error Handling

//      ○ A Promise has four states:
// 1. fulfilled: Action related to the promise succeeded
// 2. rejected: Action related to the promise failed
// 3. pending: Promise is still pending i.e not fulfilled or rejected yet
// 4. settled: Promise has fulfilled or rejected

// promise is a object/class

let isD_Online = true;

//promise class so we are calling its constrcutor of it and action within it
//
let connectDB = new Promise(function(resolve, reject) {
  // first arg is about succeed and second is about fail whatever u keep the names
  if (isD_Online) {
    var dbConnect = {
      userName: "userone",
      password: "admin"
    };
    // if fi block is true we will pass it to resolve  arg
    resolve(dbConnect); //resolved....
  } else {
    dbOffline = new Error("server is down");
    reject(dbOffline);
  }
});

// settle state one way

connectDB
  .then(function(result) {
    console.log(result);
  })
  .catch(function(result) {
    console.log(result);
  })
  .finally(function() {
    console.log("Task is done");
  });

//   connectDB.catch((result)=>
//   {
//       console.log(result);
//   })

// sattele second way
// connectDB.then(
//   result => {
//     console.log(result);
//   },
//   error => {
//     // way of calling .catch
//     console.log(error);
//   }
// );
