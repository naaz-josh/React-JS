//3. What will be printed to the console when the promise resolves and when it rejects?
const testAsyncFunction = () =>{
return new Promise((resolve, reject) =>{
if (Math.random() > 0.5) {
resolve('Test Resolve');
} else {
reject('Test Reject');
}
}).catch((err) =>{
console.log('Error caught in testAsyncFunction: ', err);
});
};
testAsyncFunction()
.then((res) =>{
console.log('Response in then block: ', res);
})
.catch((err) => console.log('Error in catch block: ', err))

// In case where the Problem is resolved it will log
"Response in then block: Test Resolved"
//// In case where the Problem is rejected it will log
"Error caught in testAsyncFunction: Test Reject"
"Error in catch block: Test Reject"

