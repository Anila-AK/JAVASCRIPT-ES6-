//five static functions by promise class

/*
1. Promise.all(); returns miltiple promise objects as single call

2. Promise.allSettled; this function returns numltple promise objects only after sattled state

3. Promise.allrace();  similar to Promise.all()  but will return the first settled promised object 

4. Promise(resolve) for success

5. Promise(reject) for failer or error handling


*/

//promise all

// it takes args as array
Promise.all([
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(1);
    }, 3000);
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve("two");
    }, 2000);
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(3);
    }, 1000);
  })
]).then(result => {
  console.log(result);
});

let urls = [
    'https://jsonplaceholder.typicode.com/',
    'https://jsonplaceholder.typicode.com/'];
   
let request = urls.map(url => fetch(url));
Promise.allSettled(request).then(
    (response) => {
        response.forEach(
            (result) => {
                console.log(`${result.url}: ${result.status}`);
            }
        )
    }
);