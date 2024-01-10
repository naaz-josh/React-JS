//Write a function to filter an array of strings to hold only unique values
let array=["naaz","neha","priya","naaz","sili","hachiko"]


// Without using Set

function uniqueElements(array){
let uniqueArray=[]
for(let i=0;i<array.length;i++){
    if(!uniqueArray.includes(array[i])){
        uniqueArray.push(array[i])
       
    }
}
    return uniqueArray
}
console.log(uniqueElements(array))

// With using set

function unique(array){
    let uniqueArr= new Set(array)
    return uniqueArr
}
console.log(unique(array))
