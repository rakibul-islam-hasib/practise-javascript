/*
1. তোমার দুজন বন্ধুর নাম একটি ফাংশনের প্যারামিটার হিসেবে পাস করো। 
2.  তারপর এই দুইটি নামের মধ্যে যে নামটি বড়ো সেটি reverse অর্ডারে রিটার্ন করো। */

function freinds(friend1 , friend2){
    // let store = []; 
    // for (let i = 0; i < freinds.length; i++) {
    //     const element = freinds[i];
    //     console.log(element);
    // }
    if(friend1.length > friend2.length){
        let reversFreind1 = friend1.split('').reverse() ;
        let finalRevarse1 = reversFreind1.join('');
        return finalRevarse1 ;
    }
    else{
        let reversFreind2 = friend2.split('').reverse() ;
        let finalRevarse2 = reversFreind2.join('');
        return finalRevarse2 ;
    }
}

// let names = 'Hasib';
let someOne = freinds('Hasib' , 'Mahedi');
console.log(someOne);