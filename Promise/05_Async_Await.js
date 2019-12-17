// Async and await are type of function that return Promise as objects

//alway write word: async before function

async function getNumbers(num) {
  return num;
}

getNumbers(20).then(result => {
  console.log(result);
});

//await... inside the assync function not regular function
//wait for promise to get settled

async function someValue() {
  let obj = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolve is done");
    }, 2000);
  });
  let result = await obj;
  console.log(result);
}
someValue();
