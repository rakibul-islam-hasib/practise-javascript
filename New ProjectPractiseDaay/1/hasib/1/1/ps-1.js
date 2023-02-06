/* ১. একটা কোড লিখো। যেটা দিয়ে কোন একটা array এর মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিতে পারবে।  */

function numbers(num){
    let store = num[0] ; 
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        // store = element ;
        if (element  < store) {
            store = num[i]; 
        }
    }
    return store; 
}
let atray = [12 , 23 ,3,78 ,  21  , 32  , 43 , 56, 67]
var tumi = numbers(atray)
console.log(tumi);