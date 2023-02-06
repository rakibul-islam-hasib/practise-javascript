/* Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to
help Harry calculate how much money the shopkeeper will return. */

var monyGiven = 1000;


var buyOrrange = 400;
var buyApple = 300;

var shopping = buyOrrange + buyApple;

var monyReturn = monyGiven - shopping;
console.log(monyReturn);