function unique(name){
    const bar = [];
    for(let i = 0; i < name.length; i++){
        let elment = name[i];
        if(bar.includes(elment) === false){
            bar.push(elment);
        }
    }
    return bar;
}
var aName = ['Adrita', 'rawja', 'ila', 'suriya', 'Adrita', 'suriya','Adrita'];

var tumi = unique(aName);
console.log(tumi);