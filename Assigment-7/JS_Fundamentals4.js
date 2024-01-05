//Given 2 arrays with related objects, return a new array where objects having the same id from each of the arrays are merged. Try to achieve it with a complexity - O(n).


let userNames = [{
    "id": 1,
    "first_name": "Nicki",
    }, {
    "id": 2,
    "first_name": "Raychel",
    }, {
    "id": 3,
    "first_name": "Demetris",
    }, {
    "id": 4,
    "first_name": "Amata",
    }]


let userEmails = [{
    "id": 2,
    "email": "rmcgrady1@cpanel.net",
    }, {
    "id": 1,
    "email": "ncrozier0@squarespace.com",
    }, {
    "id": 4,
    "email": "abraiden3@canalblog.com",
    }, {
    "id": 3,
    "email": "dkilshall2@elpais.com",
    }]
     
//mergeById(userNames, userEmails) 
    //This should return an array of users in the format: 
   

// Solution : 

// merge botht the array of the object 
function mergeById(arr1, arr2) {
    const idMap = {};
  
    // Merge objects from the first array into the map
    for (const obj of arr1) {
      idMap[obj.id] = { ...idMap[obj.id], ...obj };
    }
  
    // Merge objects from the second array into the map
    for (const obj of arr2) {
      idMap[obj.id] = { ...idMap[obj.id], ...obj };
    }
  
    // Convert the map values into an array
    const result = Object.values(idMap);
  
    return result;
  }

console.log(mergeById( userNames,userEmails))
  