//  How will you create a new copy of the object below while updating the value of address.details[0] to “5“?

let obj={
    name:"Harry Potter",
    age:12 ,
    address:{
    details:["4","Privet Drive"],
    area:"Little Whinging",
    city:"Survey",
    state:"England"
    }
}
// by using in built methods---Structured Clone 
let newObj2= structuredClone(obj)
newObj2.address.details[0]='5'
console.log(obj)
console.log(newObj2)

/// by using spread operator 

let newObj={...obj, address:{...obj.address,details:[...obj.address.details]}}
newObj.address.details[0]='6'
console.log(newObj)
console.log(obj)


//Write a function filterObj that will filter out all the keys of a flat object that have objects or arrays using Object.keys and Object.entries.

let obj1 = {
    a:"Apple",
    b:["Basketball","Baseball"],
    c: {
     call: "cellphone"
    },
    d: "Dog"
   }

//filterObject(obj) //This should return {a:”Apple”, d:”Dog”}

function filterObject(obj1){
 return Object.fromEntries(Object.entries(obj1)
 .filter(([key,value])=>{
    
    return  typeof(value)!='object'
})
)
}

console.log(filterObject(obj1))
