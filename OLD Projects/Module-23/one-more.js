function myFuncton(name){
    const store = [];
    for (let i = 0; i < name.length; i++) {
        const element = name[i];
        if(store.includes(element) === false){
            store.push(element);
        }
    }
    return store;
}
let array = ['abul', 'babul', 'abul', 'babul'];
let output = myFuncton(array);
console.log(output);