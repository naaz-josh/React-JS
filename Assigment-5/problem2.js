// what would happen if you paas index beyond a string or a negative index

let string="naziya"
console.log(string[9]) // undefined 
console.log(string[-2]) // undefined

//accessing an index beyond the range or using a negative index will not throw an error. Instead, the result will be undefined
