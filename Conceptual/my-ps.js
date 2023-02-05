 function publicBusFare(people){
    let busCapacity = 50; 
    let microCapacity = 11; 
    let tickitPrice = 250 ; 
    let remaningPeople = people % busCapacity ; 
    let remaningPeopleForMicro  = remaningPeople % microCapacity ; 
    if (remaningPeople === 0 ) {
        return 0 ; 
    }
    if(remaningPeopleForMicro === 0 ){
        return 0 ; 
    }
    else{
        return remaningPeopleForMicro * tickitPrice ; 
    }
 }

 let sent = publicBusFare(101);
 console.log(sent); 
