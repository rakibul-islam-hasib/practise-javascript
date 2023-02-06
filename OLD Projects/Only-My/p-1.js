function des(num){
    let mathSum = 0;
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        mathSum = mathSum + element ; 
        // console.log(element, i);
    }
    return mathSum ; 
}

const cika = [12,15,45,85,47,16,32];
// des(cika)
const total = des(cika);
console.log(total);