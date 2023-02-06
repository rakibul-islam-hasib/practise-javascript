function totalticket(ticketNumber){
    const firstDis = 100;
    const secondDis = 90;
    const thardDis = 70; 
    if (ticketNumber <= 100) {
        const total = ticketNumber*firstDis;
        return total;
    }
    else if(ticketNumber <= 200){
        const total = ticketNumber*secondDis ; 
        return total ; 
    }
    else if(ticketNumber <= 300){
        const total = ticketNumber * thardDis ; 
        return total ;
    }
}
var myt = totalticket(250);
console.log(myt);