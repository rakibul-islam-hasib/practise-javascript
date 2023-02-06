/* 
1 show number of 1- 50
2 if number are divided by 3 then output is 'foo'
3 if number are divided by 5 then output is 'bar'
3 if number are divided by 5 and 3 then output is 'foobar'

*/

for(let i = 1 ; i <= 50; i++){
   
 if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else{

        console.log(i);
    }
}