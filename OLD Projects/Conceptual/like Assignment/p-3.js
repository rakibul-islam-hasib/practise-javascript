/* তোমাকে একটি ফাংশন লিখতে হবে isBestFriend যেটি  প্যরামিটার হিসেবে দুইটি অবজেক্ট নিবে ।
 তোমাকে অবজেক্ট দুইটি নিয়ে দেখতে হবে এরা দুইজন একে অপরের বেস্টফ্রেন্ড কিনা । 
 যদি  বেস্ট ফ্রেন্ড হয় তাহলে true রিটার্ন করবে , না হলে false রিটার্ন করবে ।

 */

let freinds = [
   
{ name: "doe", friend: "john" },

{ name: "john", friend: "doe" }
]

function isBestFriend(names){
    // console.log(names.name);
 /*    let cico = names[0].name ; 
    console.log(cico); */
    if (names[0].name === names[1].friend && names[0].friend === names[1].name) {
        return true ; 
    }
    else{
        return false ; 
    }
}

let mdn = isBestFriend(freinds); 
console.log(mdn);