const soManyMen = [

    {name:'sakib', age:30},

    {name:'samiul', age:20},

    {name:'sahid', age:50},

    {name:'samin', age:10}

]; 


function myFunction(nameArray){
    let store = nameArray[0] ; 
    for (let i = 0; i < nameArray.length; i++) {
        const element = nameArray[i];
        // console.log(element.age);
        if(element[i].age < store){
            store = element.age ; 
        }
        
    }
    console.log(store);
}

var uou = myFunction(soManyMen); 
// console.log(uou);


