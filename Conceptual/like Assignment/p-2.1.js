function isJavaScriptFile(filename){
    return filename.endsWith('.js'); 
}
var who = isJavaScriptFile('ehoh.js'); 
console.log(who);