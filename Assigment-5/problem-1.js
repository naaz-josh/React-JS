// Problem-Statement-1

// What is the difference between i++ and ++i

// i++ is post incremental value 
//i++ is post increment because it increments i's value by 1 after the operation is over.
// Here the value of i will be assigned to j first, and then i will be incremented.

let i=1;
let j;
j=i++
console.log(i,j)
// here j value is constant 


// ++i is pre incremental value 
//++i is pre increment because it increments i's value by 1 before the operation. It means j = i; will execute after i++.

let u=1;
let v;
v=++u
console.log(u,v) // 2,2



