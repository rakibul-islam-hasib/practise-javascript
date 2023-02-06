// https://www.geeksforgeeks.org/bubble-sort-algorithms-by-using-javascript/
// Creating the bblSort function
// var numArray = [140000, 104, 99];
var numArray = [140000, 104, 84 ,  99 , 1500];
var shorted =  numArray.sort(function(a, b) { // a , b একটা প্যারামিটার নিতে হবে । আমি যে কোনো অক্ষর নিতে পারি । 
  return b - a ; // এইখানে আমি যদি b - a দেই তাহলে আমাকে বড় থেকে ছোট দেখাবে । এবং 
});
 let some = numArray.length - 2; 
console.log(shorted[1]);