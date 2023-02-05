// making a public bus fair start here  
// first We Need To make a Function 
// lets do that 
// bus a hosce 50 jon jaita perba...micro a 11 jon jaita parba.but..11 jon er kom hola micro jabana.
// r ja bacba..local bus a jaba.r local buus er vara poti jon -250tk;
function publicBusFare(participent){
    let busSeatCapacity = 50;
    let microCapacity = 11;
    let localBusPrice = 250;
    let remaining = 0;
    if(participent != typeof Number && participent <50){
       return "please provid valid numberb & participent"
    }
    remaining = participent % busSeatCapacity;
    if(remaining >11){
    remaining = remaining % microCapacity;
    console.log(remaining); 
     }
    let costOffPublicBus = remaining * localBusPrice
    // console.log(costOffPublicBus);
    
   return costOffPublicBus;

}

console.log(publicBusFare(50))