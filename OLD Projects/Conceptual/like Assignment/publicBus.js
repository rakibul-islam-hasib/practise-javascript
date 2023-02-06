/*

1. একটি বড় সংখ্যাক মানুষজন(৫০ বা তার বেশি) পিকনিকে যাবে। 
2. বাসের সংখ্যা মানুষের সংখার উপর নির্ভর করবে। 
3. ধরো  আমাদের বাস ও মাইক্রো আছে ।
3. প্রতিটি  বাসের ক্যাপাসিটি ৫০ জন এবং প্রতিটি মাইক্রবাসের ক্যাপাসিটি ১১ জন |
4. এবং পাবলিক বাসের প্রতিটি টিকেটের মূল্য ২৫০ টাকা করে।
5. মাইক্রবাসে ১১ জনের কম হলে মাইক্রবাসে যাওয়া যাবে না। 
6. এখন তোমাকে একটি ফাংশন লিখতে হবে যার নাম হবে publicBusFare যেটি প্যরামিটার হিসেবে  একটা সংখ্যা (কতজন যাবে )   নিবে ।
7. মোট কতটাকা পাবলিক বাস ফেয়ারে যাবে সেটি তোমাকে রিটার্ন করবে ।*/

function publicBusFare(people){
    let busCapacity = 50 ; 
    let microBusCapacity = 11 ; 
    let publicBusFare = 250 ; 
    let remainingPeople  = people % busCapacity ; 
    let remainingPeopleFromMicro = remainingPeople % microBusCapacity ;
    if(remainingPeople === 0 ){
        return 0 ; 
    }
    if(remainingPeopleFromMicro === 0){
        return 0 ; 
    }
    else{
        return remainingPeopleFromMicro * publicBusFare ;
    }
    
 
}

let result = publicBusFare(111); 

// let demo = 117%50 ; 
console.log(result);