//Write a function mapBy to convert an array of objects into an object mapped by the specified key:

let users = [{
    "id": 1,
    "first_name": "Nicki",
    "email": "ncrozier0@squarespace.com",
    "date_of_birth": "2009/05/09"
    }, {
    "id": 2,
    "first_name": "Raychel",
    "email": "rmcgrady1@cpanel.net",
    "date_of_birth": "1996/11/05"
    }];
    //mapBy(users, "first_name") 
     
    //This should return
    //{
    // “Nicki”:{id:1, first_name:”Nicki”, ...},
    // “Raychel”:{id:2, first_name:”Raychell”, ...},
    //}

     function mapBy(users,first_name){
        
        return users.reduce((result,item)=>{
        //Putting new entry
            result[item[first_name]]=item
            return result
        },{})
    }
    
    console.log(mapBy(users,'first_name'))



    

 
    

    
