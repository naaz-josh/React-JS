//What happens if you pass a regular/invalid JSON string to JSON.parse? What will happen if such an invalid function runs in the program? Will other parts of the code execute correctly after that?

// valid json string 

let validJSONString='{"name":"naziya","hobbies":["gym","yoga","bikes"]}'
let validJSONObject= JSON.parse(validJSONString)
validJSONObject.name="naaz";
validJSONObject.city="satara"
console.log(validJSONObject)


//invalid JSON OBJECT

let invalidJSONString='{"name":"neha","age":23,"designation":"dev",}'    // Syntax Error
// let invalidJSONObject= JSON.parse(invalidJSONString)
//  invalidJSONObject.name="priya";
// invalidJSONObject.city="pune"
// console.log(invalidJSONObject)


// Error Handling in Javascript

try{
 let invalidJSONObject= JSON.parse(invalidJSONString)
 console.log(invalidJSONObject)
}
catch(error){
    console.error("Error:", error.message);
}
console.log("naaz")

/*the JSON.parse call with an invalid JSON string triggers the catch block, and the error message is logged. The code after the try-catch block will continue to execute.

However, if the error is not caught and the exception propagates to the global scope (e.g., it's not within a function with its own try-catch block), it might lead to the termination of the script. Subsequent code in the same script won't be executed.

It's good practice to handle errors gracefully to ensure that the failure of one part of the code doesn't have a cascading effect on the entire application. Always consider using try-catch blocks when working with potentially problematic operations, such as parsing JSON from external sources.*/
