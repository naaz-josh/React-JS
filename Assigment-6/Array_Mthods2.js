//In JavaScript, whether a method is mutating or non-mutating depends on whether it modifies the original data structure or returns a new one without modifying the original. 

//Mutating Methods:Directly modifies the original  array

// push --mutating method
let originalArray=["mango","banana","grapes","lemon"]

let newArray=originalArray.push('kiwi')
console.log(originalArray)

//pop---mutating method

let newArray1=originalArray.pop()
console.log(originalArray)

// filter:non-mutating method

let newArray3=originalArray.filter((el)=>el.includes("gra"))
console.log(newArray3)
console.log(originalArray)

// map: non-mutating method

let newArray4=originalArray.map((el)=>{
    return el+ "'s"
})

console.log(newArray4)
console.log(originalArray)

// sort : mutating --makes changes in the original array

console.log(originalArray.sort())

console.log(originalArray)

// find : non-mutating 

let newArray5=originalArray.find(el=>el.includes('lem'))
console.log(newArray5)
console.log(originalArray)