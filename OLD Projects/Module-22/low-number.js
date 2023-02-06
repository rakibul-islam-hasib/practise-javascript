function lower(num){
    // console.log(num);
    let min = num[0];
    for (let i = 0; i < num.length; i++) {
        const element = num[i];
        // console.log(element);
        if (min > num[i]) {
            min = element;
        }
    }
    return min;
}


let cdx = [125, 584, 231,444];
let low = lower(cdx);

console.log(low);