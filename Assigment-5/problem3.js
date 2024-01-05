//Do you think JSON.stringify would work for arrays as well? What about nested objects? What happens if we pass numbers, strings, undefined, null to JSON.stringify?
// JSON.stringify for an object


// JSON.stringify works for an array,Result will be array in string format
let array=["naaz","neha",9,"shivi"]
console.log(typeof(JSON.stringify(array)))

// Nested Objects 

let company={
    name:"josh",
    employee:{
        name:"naziya",
        designation:"QA",
        age:27   }

}
console.log(JSON.stringify(company))

// pass numbers, strings, undefined, null to JSON.stringify
let ex;
console.log((JSON.stringify(6)),typeof(JSON.stringify(6)))        // 6// typeof-string
console.log(JSON.stringify("naziya"),typeof(JSON.stringify("naziya")))  // "naziya"   // string
console.log(JSON.stringify(null),typeof(JSON.stringify(null)))       // null ///string
console.log(JSON.stringify(ex),typeof(JSON.stringify(ex)))         // udefined // undefined 