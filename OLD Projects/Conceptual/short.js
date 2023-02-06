// https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
// Creating the bblSort function
// var numArray = [140000, 104, 99];
var numArray = [140000, 104, 84 ,  99 , 1500];
numArray.sort(function(a, b) {
  return a - b;
});
let some = numArray.length - 2; 
let getIndex = numArray[some];
console.log(getIndex);