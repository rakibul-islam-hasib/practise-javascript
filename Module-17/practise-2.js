/* Write a program to calculate the average marks of Mathematics, Biology, Chemistry, Physics, and
Bangla of a student. */
// 75.25, 65, 80, 35.45, 99.50
var Mathematics =75.25 ;
var Biology = 65;
var Chemistry = 80; 
var Physics = 35.45;
var Bangla = 99.50;
var totalMark = Mathematics + Biology + Chemistry + Physics + Bangla ;
var avarage = totalMark / 5 ; 
var hasib = avarage.toFixed(2);
console.log(hasib);