
function avarage(getSubject){
    var sum = 0;
    for (let i = 0; i < getSubject.length; i++) {
        const element = getSubject[i];
        // console.log(element);
        sum = sum + element;
        // let avarageMark = sum / getSubject.length ;
    }
    return sum;
}
var getSubject = [75.25, 65, 80, 35.45, 99.50];
// avarage(75.25, 65, 80, 35.45, 99.50);
var totalMark = avarage(getSubject);
var avarageMark = totalMark / getSubject.length;
avarageMark = avarageMark.toFixed(2)
console.log(avarageMark);

