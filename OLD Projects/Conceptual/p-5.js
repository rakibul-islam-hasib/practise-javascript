/* 
1. এমন একটা ফাংশন বানাবে যেটিতে তুমি ইনপুট হিসেবে পানির volume ইন্সারট করবে মিলিলিটারে। 
2.  এই মিলিলিটারকে লিটারে কনভার্ট করে  ফাংশন তোমাকে রিটার্ন করবে। */

function waterml(input){
    let oneLTR = 1000; 
    let totalLTR = input / oneLTR ;  
    return totalLTR ; 
}

let sent = waterml(10000) ;
console.log(sent); 