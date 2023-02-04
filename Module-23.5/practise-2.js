/* ২. একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। 
3 . এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে। 
 */

function centimeterToMeter(centimeter){
    var local = 100; 
    let myMetter  =  centimeter / local ;
    return myMetter ; 
}

let sent = centimeterToMeter(500)
console.log(sent);