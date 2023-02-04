/* 
1. একটা ফাংশন বানাবে যেটি একটি অ্যারে অফ অবজেক্ট রিসিভ করে প্যারামিটার হিসেবে।
2. প্রতিটি অবজেক্টে একটি মানুষের নাম  এবং বয়স থাকবে।
3.  এখন তোমার কাজ হচ্ছে এই অ্যারে থেকে সবচেয়ে ছোট যে person কে খুঁজে বের করা। 
অব্জজেক্টটি/Input দেখতে এমনঃ

[

    {name:'sakib', age:30},

    {name:'samiul', age:20},

    {name:'sahid', age:50},

    {name:'samin', age:10}

]


*/

const soManyMen = [

    {name:'sakib', age:30},

    {name:'samiul', age:20},

    {name:'sahid', age:50},

    {name:'samin', age:10}

]; 

function whoYou(getArray){
    // if(getArray)
    // console.log(getArray);
    let small = getArray[0].age;
   for (let i = 0; i < getArray.length; i++) {
    
    
    const element = getArray[i];
   small = element ; 
    let smallest = element.age ; 
    // console.log(element.age); 
    if (smallest > small) {
        small = element  ; 
    }

   }
   return small ; 
}

let sentValue = whoYou(soManyMen);

console.log(sentValue);
