// ৩ এর নামতা লিখো জাভাস্ক্রিপ্ট ব্যাবহার করে।
function hasib(mgc) {
    
    let store = 0 ;
    for (let i = 0; i <= mgc; i++) {
        const element = i;
        // console.log(element); 
        let myNumta = 3 ;
        store = myNumta * element ; 
    }
    return store ; 
}

let tumi = hasib(10); 
console.log(tumi);