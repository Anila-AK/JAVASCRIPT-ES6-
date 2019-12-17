//Try and catch and exception handling
/*
try{

}catch (error class)
{
    error....
}
*/

// try {
//   console.log("this is try block");
// } catch (error) {
//   console.log("error has occure");
// }

// error block excution
// try catch block does not work in case of compile
// in following example we didnt define someFunction before or within the try block so this is compiler error

// try {
//   setTimeout(() => {
//     someFunction();
//   }, 1000);
// } catch (error) {
//   console.log("will not work");
// }

// error object
// it offers three functions within error class
//1. name 2. message 3. stack

// try {
//   //some code
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

// let person = '{"name": "anila", "age": 25}'

// converting a string to object by JSON.parse
// let employee=JSON.parse(person);
// console.log(employee);

// console.log(employee.name);
// console.log(employee.age);

// 1. read a string and convert into json object 
// 2. verify that name lkey is part of string 
// if not than we should throw exception
let student='{"age":24}';
try {
    let studentone =JSON.parse(student);
    console.log(studentone);
    if(!studentone.name)
    {
        throw new SyntaxError("Incomplete data: no name")
    }
    
} catch (error) {
    if(error.name=="SyntaxError"){
        console.log(error.name+" "+ "Json error" +" "+ error.message );
        
    }else{
        throw error;
    }
    
}


//try catch ... finally 

//finally block will always exceute no matter try or catch block 



function evenORodd(num) {
    if(num %2==0)
    {
       
        console.log("its an even number");
        
    }else{
        {
            throw new Error("number is odd")
        }
    }
    
}
try {
    evenORodd(41); 
} catch (error) {
    
}
//finally is always return type 
finally{
    console.log("finally should excuted");
    
}

console.log("code contiune");


