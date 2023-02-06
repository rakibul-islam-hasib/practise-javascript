const objName = [

    {name:'sakib', age:30},

    {name:'samiul', age:20},

    {name:'sahid', age:50},

    {name:'samin', age:100}

]; 



function myFunction(nameArray){
    let store = nameArray[0] ; 
    for (let i = 0; i < nameArray.length; i++) {
        const element = nameArray[i];
        // console.log(element.age);
        if(element.age < store.age){
            store = element ; 
        }
        
    }
    // console.log(store);
    return store ;
}

var uou = myFunction(objName); 
console.log(uou);


