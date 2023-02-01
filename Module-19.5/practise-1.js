// ২৪. তোমার কাছে: ৮০০০০ টাকার বেশি হলে তুমি mac কিনবে, ৬০ টাকার বেশি হলে gaming ল্যাপটপ কিনবে, ৪০ হাজার টাকার বেশি হলে lenovo yoga কম্পিউটার কিনবে , ২০ হাজার টাকার বেশি হলে পুরান ল্যাপটপ কিনবে। না হয় তুমি মোবাইল দিয়ে কাজ চালাবে। 

var myBudget = 45000;

var price1 = 80000;
var price2 = 60000;
var price3 = 40000;
var price4 = 20000;

if( myBudget > price1){
    console.log('I will Buy a MAC');
}
else if(myBudget>price2){
    console.log('I will Buy A Gaming Laptop');
}
else if(myBudget> price3){
    console.log('I will Buy A Lenovo Yoga');
}
else if(myBudget > price4){
    console.log('I will Buy A secend Hand Laptop');
}
else{
    console.log('My Mobile Is best');
}