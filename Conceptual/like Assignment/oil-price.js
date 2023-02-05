/*  oilPrice

ফাংশন নেম দিতে হবে oilPrice। এই ফাংশন তিনটা প্যারামিটার নিবে।



প্রতি লিটার ডিজেলের এর দাম – 114 টাকা
প্রতি লিটার পেট্রোল এর দাম – 130 টাকা
প্রতি লিটার অকটেনের এর দাম – 135 টাকা


এখন সে যদি বিভিন্ন লিটারের ডিজেল,পেট্রোল,অকটেনের  অর্ডার দেয় তাহলে টোটাল কত টাকা খরচ হবে  হলো সেই সংখ্যা রিটার্ন করতে হবে।
 */

function oilPrice(prm1 , prm2 , prm3 ){
    let dijelPrice = 114 ; 
    let prectrol = 130 ; 
    let octen = 135 ; 
    let totalPrice = dijelPrice * prm1 + prectrol * prm2 + octen * prm3  ;
    // --------------------------------------//
     return totalPrice ; 
}

let output = 