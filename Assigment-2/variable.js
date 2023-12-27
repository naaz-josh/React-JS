// defining variable with let
// let -can be reassigned but cannot be redeclared

let name;
name="Naziya"
console.log(name)

// const - cannot be redeclared and reassigned 
// An initializer for a constant is required. You must specify its value in the same statement in which it's declared
// const profession-----incorrect way

const profession='QA'
console.log(profession)

// var - can be reassigned but can be redeclared
var quality;
quality='poor'
console.log(quality)
var quality="superb"
console.log(quality)


//-------------------------------------------------------------------------------------------------------//

// Defining Array  with let 

let employee=[]
employee[0]='neha'
employee[1]='priya'
employee[2]='suraj'
employee[3]='gayatri'
console.log(employee)
console.log(typeof (employee))


// Defining obj with let

let student={
    name: "Naziya",
    hobbies: ['gym', 'cyclying', 'water sport', 'biking', 'hiking'],
    new_year_resolution: "React JS",
    Age: 25
}

console.log(student)
console.log(typeof (student))

// manupulating object
// Add element to object

student.place="satara"
console.log(student)
// update element in object
student.name="neha"
console.log(student)
student.new_year_resolution="weight loss"
console.log(student.new_year_resolution)

// delete elements from object

delete student.place
console.log(student)




// Defining obj with const

const student2={
    name: "sanchita",
    hobbies: ['books', 'travel', 'water sport', 'biking', 'hiking'],
    new_year_resolution: "Java",
    Age: 20
}

//create 
student2.place="mumbai"
console.log(student2)

// update object
student2.name="gaytri"
console.log(student2)

// delete object
delete student2.place
console.log(student2)

// Difference between objects declared with let and const variable

//the const declaration only prevents the variable itself from being reassigned, not the contents of objects or arrays if the variable holds a reference to an object or array.

// Typeof()

let arr=[]
console.log(typeof (arr)) // object

//Arrays in JavaScript are considered a special type of object. The typeof operator returns "object" for arrays.
let xyz;
console.log(typeof (xyz)) // undefined 



let nz=null;
console.log(typeof (nz))  // object
//The typeof operator returns "object" for null as well. This is considered a historical artifact and is often considered a flaw in the language.

//---------------------------------------------------------------------------------------------------//



//In addition to using the typeof operator, you can employ other methods to determine if a variable is an array or NaN in JavaScript.

// 1.Array.isArray() Method:
const myArray=[1, 2, 3];
if(Array.isArray(myArray)) {
    console.log('It is an array!');
} else {
    console.log('It is not an array.');
}

// 2. isNaN() Function:
const myValue=NaN;
if(isNaN(myValue)) {
    console.log('It is NaN!');
} else {
    console.log('It is not NaN.');
}

//--------------------------------------------------------------------------------------------------//

