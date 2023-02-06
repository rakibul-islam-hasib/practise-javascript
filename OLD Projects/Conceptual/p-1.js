function numbers(nNumber) {
    let mySum = 0 ; 
    for (let i = 0; i <= nNumber; i++) {
        const element = nNumber;
        mySum = mySum + i ; 
    }
    return mySum ; 
}

let number = numbers(50);
console.log(number);



/* 
function secondLargest(array) {
  array.sort(function (a, b) {
    return b - a;
  });
  return array[1];
} */