/* 
1. ফাংশন নেম দিতে হবে radianToDegree । 
2. এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)।
3. তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে।
4. রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
*/
function radianToDegree(radian){
    let oneRedian = 57.2958; 
    let toDegree = radian * oneRedian ; 
    // console.log(toDegree.toFixed(2));
    let output = toDegree.toFixed(2); 
    return output ; 
}

let myOutput = radianToDegree(25); // 1. if valu 10 out = 572.96 , 2. if value is 25 output is 1432.39 ; 
console.log(myOutput);