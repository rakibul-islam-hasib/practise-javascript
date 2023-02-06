
function bestFriend(friends){
    let store = friends[0];
    for (let i = 0; i < friends.length; i++) {
        if(friends[i].length > store.length){
            store = friends[i];
        }        
    }
    return store ; 
}




let myFriend = ['Mahedi', 'Rifat', 'Nafis ali ' , 'Siam']; 

let sent = bestFriend(myFriend); 
console.log(sent);