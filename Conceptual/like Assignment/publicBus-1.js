function publicBusFare(people){
    let busCapacity = 50 ; 
    let microBusCapacity = 11 ; 
    let remainingPeople = people % busCapacity ; 
    let remainingPeopleFromMicro = remainingPeople % microBusCapacity ; 
    let ticketPrice = 250 ; 
    if(remainingPeople === 0 ){
        return 0 ; 
    }
    else if(remainingPeopleFromMicro === 0 ){
        return 0 ;
    }
    else {
        return remainingPeopleFromMicro * ticketPrice ;
    }
}

let sent = publicBusFare(55); 

console.log(sent);
