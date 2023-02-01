// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে। 

function iamSingle(namta) {
    let gun = 1;
    for (let i = 1; i <= 10; i++) {
        // const element = array[i];
         gun = namta * i ; 
        console.log(gun);
    }
}
iamSingle(13)
