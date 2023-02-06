
function bestFriend(hasib){
    var friends = hasib[0];
    for (let i = 1; i < hasib.length; i++) {
        // const element = hasib[i];
        // console.log(element);
        if(hasib[i].length > friends.length ) {
            friends = hasib[i] ;
        }
    }
    return friends ;
}





let myFriend = ['Mahedi', 'Rifat', 'Nafis fus fus' , 'Siam']; 
let mys = bestFriend(myFriend);
console.log(mys);