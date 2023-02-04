/* ১. সিম্পল একটা ফাংশন লিখতে হবে।
2. যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet .
3. আর রিটার্ন করবে inch । 
4. অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে ,
   সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়।  */

   function feetToInch(feet){
    let inch = 12 ;
    let totalInch = feet * inch ;
    return totalInch ; 
}
let sent = feetToInch(22);
console.log(sent);