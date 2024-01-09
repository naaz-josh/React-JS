// //Create a promise that makes a fetch call, but resolves with the data only 2 seconds after the data has been received in the fetch.

// const fetchdelay=()=>{
//    return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             return resolve(fetch('https://reqres.in/api/users'))
//         },5000)
       
//     }).then((res)=>{
//         return res.json()
//    }).then((data)=>{
//       console.log(data)
//       console.log('Data is fetched')
//    })
  
// }
// fetchdelay()
// console.log('data fetching has started')


// with the help of async and await 

const fetchdelay=()=>{
    return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             return resolve(fetch('https://reqres.in/api/users'))
         },1000)
        
     })
    }

let delayfunc=async()=>{
    let data= await fetchdelay()
    let sorteddata =await  data.json()
    console.log(sorteddata)
    console.log('Data is fetched')
}
delayfunc()
console.log('data fetching has started')

