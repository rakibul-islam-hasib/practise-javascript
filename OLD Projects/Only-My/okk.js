/* var myStrings = 'I am King Of Bangladesh';
var yourName = true ;
var myNumber = 50;
console.log(typeof myStrings , typeof yourName , typeof myNumber); */

//-----------2-----------// 
/* const karMobile = 1319373523;

// mobile = 1585999414;

let mobile = 1319373523;
mobile = 1585999414;
console.log(mobile);
 */

/* var num1 = 50;
var num2 = 25;
var num3 = 56; 
var num4 = 4;

// using +, - , * , / , % 
let sum = num1 + num2 ; 
var sumDitels = sum ; 
var minus = sumDitels - num2;
let minisDitels = minus;
let maltiply = minisDitels * num4 ; 
let mlInfo = maltiply ; 

let divaided = mlInfo / num4 ; 
let imagin = divaided % num2 ;
console.log(imagin); */

/* var num1 = 58 ; 
var num2 = 60; 

    // if(num1 < num2){
    //     console.log('Okk Fine');
    // }
    // else if(num1 <= num2){
    //     console.log('I am Fine');
    // }
if(num1 < num2 && num2 % 2 === 0){
    console.log('I am succesed');
}
else if(num1 > num2 || num2 %2 !== 0){
    console.log('Wow my code is running');
} */

/* let tumi = 450;
let amar = 50; 
if(tumi < amar){
    console.log('I am win');
}
else{
    console.log('Some One Femmous');
}
 */
/* 
let i = 7; 
while (i <= 19) {
    console.log(i);
    i++
} */

/* ৮. তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে।/ 
 এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। /
 সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। /
 array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। /
 এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 
 */
/* let min = [12,23 , 34, 21 , 54]; 

let arrayUpadan = min.length ; 
// console.log(arrayUpadan);
min[3] = 45;
min.push(53);
min.push(85);
console.log(min);
 */
/* 
.

৯. তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 
*/

/* let min = [12,23 , 34, 21 , 54]; 
for (const naik of min) {
    console.log(naik);
} */

/* 
১০. তোমাকে যদি বলা হয়,
 একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে ,
  সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 

*/
/* function hasib(arrayn) {
    // let minimumNumber = 
    for (let i = 0; i < arrayn.length; i++) {
        const element = arrayn[i];
        // console.log(element);
        if(element > 80){
            console.log(element);
        }
        else{
            console.log('Nothing is for show');
        }
    }
}
let min = [12,23 , 34, 21 , 54, 500 ]; 
hasib(min) */
/* ১১. তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো।  */
/* function hasib(num1 , num2 , num3) {
    // console.log(num1, num2 , num3);
    let cica = num1 * num2 * num3 ;
    return cica ;
}

let my =hasib(3,5,7);
console.log(my); */
/* ১২. একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 
 */
const shopping = {
    name:'tomato', 
    price:300,
    quantiti:10
}

shopping.name = 'Alu'

console.log(shopping);