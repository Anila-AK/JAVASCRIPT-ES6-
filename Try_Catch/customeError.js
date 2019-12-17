/*
Error class bluid-in javascript

class Error
{
    constructor(message){
        this.message=message;
        this.name="Error";
        this.stack=<call stack ...js>
    }
}
*/

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function test() {
  throw new ValidationError("this is Validation Execption");
}
try {
  test();
} catch (error) {
  console.log(error.message);
  console.log(error.name);
}

function processJson(jsonobj) {
  let user = JSON.parse(jsonobj);
  if (!user.age) {
    throw new ValidationError("no age key found");
  }
  if (!user.name) {
    throw new ValidationError("no name key found");
  }
  return user;
}

try {
  let x = '{"age":23, "name": "test"}';
  processJson(x);
  console.log(x);
} catch (error) {
  // console.log(error);
  if (error instanceof ValidationError) {
    console.log("invalid data" + " " + error.message);
  } else if (error instanceof SyntaxError) {
    console.log("this is json Syntax error");
  } else {
    throw error;
  }
}

class ProcessExecption extends ValidationError {
  constructor(message) {
    super(message);
  }
}

//take two nums as args... if num1 is divided by num2 which is zero then through execption
function Numbers(num1, num2) {
  if (num1 == 0 || num2 == 0) {
    throw new ProcessExecption("this is infinte ");
  } else {
    let aa = num1 / num2;
    console.log("this is perfect number" + " " + aa);
  }
}

try {
  Numbers(40, 10);
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("invalid data" + " " + error.message);
  } else if (error instanceof SyntaxError) {
    console.log("this is json Syntax error");
  } else {
    throw error;
  }
}
