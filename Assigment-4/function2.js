//Take a function that accepts a function as a parameter (also known as callback function).

function test(callback){
     return callback;
   }
   
function callbackFunc(){
    console.log("Calling the callback function")
    return 5;
   }


//Explore the following cases - what is printed in the console, and what gets returned:
//Statement-1 : console is printed along with undefined for the return statement
console.log(test(callbackFunc)) 

// Statement-2: test(callbackFunc()) - callback is not a function

console.log(test(callbackFunc()))

//Statement-3 : test(() => callbackFunc())---console is printed along with undefined for the return statement

console.log(test(() => callbackFunc())) 

//Statement-4 : What happens when you return callback() from the test function?
// Solution-console and return value is printed probably


console.log(test(callback))

//Statement-5:What happens when you return callback from the test function?
// Solution- It returns [Function: callbackFunc] 

console.log(test(callbackFunc)) 




