/* 
1. Chear = 3cft
2. Table = 5cft

*/


function woood(chear , table , bed){
    const perChear = 3; 
    const perTable = 10;
    const perBed = 50;
    //-----------Calculator-----------//
    var chearWood = chear * perChear ;
    var tableWood = table * perTable;
    var bedWood = bed * perBed; 
    console.log('Bed Price :' , bedWood );
    console.log('Table Price :' , tableWood );
    console.log('Chear Price :' , chearWood );
}

const total = woood(12, 4,10)