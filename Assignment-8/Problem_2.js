//2.  Using promises - write a function that fetches data from an API endpoint (GET https://reqres.in/api/users ). Log the data into the console once it is received


let promiseResult= fetch('https://reqres.in/api/users')
.then((res)=>{
    return res.json()
})
.then((data)=>{
    console.log(data)
})


// using async await


const fetchdata= async()=>{
    const data1= await fetch('https://reqres.in/api/users')
    const sortedData= await data1.json()
    console.log(sortedData)
}

fetchdata()