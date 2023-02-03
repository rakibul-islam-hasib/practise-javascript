/* 
if you will buy 100 ticket then the price is 100 taka 
if you will buy mor then 100 or less then 200 your ticket price will be 90 taka . 
*/

// function ticket(myt){
//     if(myt < 100){
//         console.log('Your ');
//     }
// }
function ticket(ptc) {
    for (let i = 0; i < ptc.length; i++) {
        const element = ptc[i];
        let ticketPrice = 100;
        if (ptc < 100) {
            let total = 0;
            for (let i = 0; i < ptc.length; i++) {
                const element = ptc[i];
                total = total + element ;
            }
            return total;
        }
        else if(ptc < 200){
        let ticketPrice = 90;
        let total = 0;
        for (let i = 0; i < ptc.length; i++) {
            const element = ptc[i];
            total = total + element ;
        }
        }
        return total;
    }
}
let my = ticket(12);
console.log(my);