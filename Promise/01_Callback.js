// callback function??
function callBackDemo(argone, callback) {
  setTimeout(() => {
    console.log(argone);
    callback();
  }, 2000);
}

callBackDemo("this is arg one", () => {
  setTimeout(() => {
    console.log("This is callback function args");
  }, 3000);
});

//callback hell --> task after task after task it works sequencal

// function taskone(arg1, callback) {

// if(error)
// {
//     //handle the error
// }else {
//     function tastwo(arg2, callback) {
//         if(error)
//         {
//             //handle the error
//         }
//         else{
//             function task3(arg3, callback) {
//                 if(error)
//                 {
//                     //handle the error
//                 }
//             }
//         }
//     }
// }
// }
