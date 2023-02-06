/* ৫. এইটা একটু ট্রিকি হতে পারে, 
1. একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। 
2. তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা।
3. এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। 4 4. আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। 
5. এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। */

/* let store = []; 
for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    // console.log(element);
    if(myArray[i] < 0){
        store = element ; 
    }
    return store ; 
}
const myArray = [12 , 38 , -11 , 21 , -23 , -5 , 7 , -1] ; 
console.log(store); */
function myFunction(numArray) {
    let store =  [ ]; 
  /*   for (let i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        if (element > 0 ) {
            console.log(element);
            // store = element ;
        }
    }  */  
    if (numArray > 0 ) {
        console.log(element);
        // store = element ;
    }
    return store ; 
}

const myArray = [12 , 38 , -11 , 21 , -23 , -5 , 7 , -1] ; 
let sent = myFunction(myArray);
console.log(sent);