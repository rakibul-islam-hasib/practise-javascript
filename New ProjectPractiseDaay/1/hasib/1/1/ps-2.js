/* ২. একটা কোড লিখো যেটা দিয়ে তিনটা সংখ্যার মধ্যে সবচেয়ে ছোট সংখ্যা বের করে দিবে।   */
// let num1 = 12 ; 
// let num3 = 18 ; 
// let num2 = 14 ; 
/* if(num1 > num3 || num1 > num3){
    console.log(num1);
}
else if(num2 > num1 || num2 > num3){
    console.log(num2);
}
else if(num3 > num1 || num3 > num2){
    console.log(num3);
} */

function number(num1 , num2 , num3 ) {
    if(num1 > num2 && num1 > num2) { 
        return num1 ; 
    }
    else if(num2 > num1 && num2 > num3){
        return num2 ; 
    }
    else if(num3 > num1 && num3 > num1){
        return num3 ; 
    }
}

let sent = number(13 , 43 , 23); 
console.log(sent);