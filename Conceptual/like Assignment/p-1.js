/* 
1. ফাংশন নেম দিতে হবে radianToDegree । 
2. এই ফাংশনে প্যারামিটার হিসেবে নিবে রেডিয়ান (radian)।
3. তারপর সেটাকে ডিগ্রীতে (degree) কনভার্ট করে কত ডিগ্রী (degree) হয় সেই সংখ্যা রিটার্ন করবে।
4. রিটার্ন করার সময় তোমাকে দশমিক এর পর দুই ঘর রিটার্ন করতে হবে।
*/
function radianToDegree(radian){
    let oneRedian = 57.296 ; 
    let toDegree = radian * oneRedian ; 
    console.log(toDegree.toFixed(2));
}

radianToDegree(1);