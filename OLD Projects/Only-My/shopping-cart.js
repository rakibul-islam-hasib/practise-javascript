let myBajar = [
    {
        name: 'Tomato',
        price: 40,
        total: 3
    },
    {
        name: 'Alu',
        price: 40,
        total: 4
    },
    {
        name: 'Begun',
        price: 30,
        total: 2
    },
    {
        name: 'Morich',
        price: 100,
        total: 1
    }
];
function myShopping(cart){
    let total = 0; 
    for (let i = 0; i < cart.length; i++) {
        const element = cart[i];
        // console.log(element);
        total = total + element.price *element.total ;

    }
    return total;
}

const dy = myShopping(myBajar);
console.log(dy);