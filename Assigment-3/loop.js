
// Problem Statement-1
let age= 25;

if(age<=12){
    console.log('child')
}
else if(age<=18 && age>=13){
    console.log('teen')
}
else {
console.log('adult')
}

// Problem Statement-2 (Switch Case)

let age1=45;

switch(true){
   case age1<=12 : 
    console.log('child')
    break;
   case age1<=18 && age1>=13 : 
    console.log('teen')
    break;
   case  age1>=18 : 
    console.log('adult')
    break;
   default: 
    console.log('Unknown')
   
}

// Problem Statement-3 
// Declare a variable let arraySize=25; Using a for loop , add numbers from one onwards into an array till the arraySize is Reached
let arraySize=25
let arr=[]

for (let i=1;i<=arraySize;i++){
    arr.push(i)
}
console.log(arr.length)

// Problem Statement-4 

// Same problem using While loop

let i=1;
let arr_1=[]
let arraySize_1=25

while(i<=arraySize_1){
    arr_1.push(i)
    i++
}
console.log(arr_1.length)


