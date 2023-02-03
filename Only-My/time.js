// console.log(Date);


let myPhone = [
    { name: 'Iphone', camera: '10MP', price: 1000000, color: 'Golden' },
    { name: 'GEO', camera: '2MP', price: 1800, color: 'Green' },
    { name: 'Itel', camera: '13MP', price: 7000, color: 'Blue' },
    { name: 'samsung', camera: '10MP', price: 20000, color: 'Dark Red' }
]

function myfunctio(phone) {
    let who = phone[0];
    for (let i = 0; i < phone.length; i++) {
        const element = phone[i];
        // console.log(element);
        if(element.price < who.price){
            who = element;
        }

    }
    return who;
}
var mtc = myfunctio(myPhone);
console.log(mtc);