/*
1. ফাংশন নেম দিতে হবে isJavaScriptFile । 
2. এই ফাংশনে প্যারামিটার হিসেবে নিবে একটি স্ট্রিং(String) যেটি হবে একটি ফাইল নেম (যেমনঃ ‘index.js’)। 
3. যদি এটি জাভাস্ক্রিপ্ট ফাইল হয় তোমাকে true রিটার্ন করতে হবে আর যদি না হয় তাহলে false রিটার্ন করতে হবে । */

function isJavaScriptFile(String){
    let someThing = String.split('.'); 
        var smmb = someThing.includes('js')
        console.log(smmb);
    // }

}

let sent = 'js.png'
isJavaScriptFile(sent)