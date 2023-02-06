function publicBusFare(members) {
    let busCapacity = 50 ; 
    let microBusCapacity = 11 ;
    let remainingPeopleFromBus = members % busCapacity ; 
    let remainingPeopleForMicro = remainingPeopleFromBus % microBusCapacity ; 
    let busFare = 250 ; 
    if(remainingPeopleFromBus === 0){
        return 0 ; 
    }
    else if(remainingPeopleForMicro === 0 ){
        return 0 ; 
    }
    else{
        return remainingPeopleForMicro * busFare ; 
    }
}
let tumi = publicBusFare(54);
console.log(tumi);