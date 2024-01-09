//1. Write a function that can stop execution of a function for the number of milliseconds sent as an argument
// Example:
//  const func = async () => {
//   console.log(“Printing before”)
//   //Call your function here eg. sleep(3000)
//   console.log(“Printing after”)
// ()

const sleep=(timeLimit)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve({data:{name:"naziya",lang:"javascript",eng:true}})
        },timeLimit)
    })
}

console.log("printing before")

const testAsyncFunction = async()=>{
 const data= await sleep(3000)
 console.log(data)
 console.log("Data is fetched")
}
testAsyncFunction()
console.log('Printing after')