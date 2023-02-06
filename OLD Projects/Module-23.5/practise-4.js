/* ৪.
1. একটা ফাংশন লিখবে। 
2. এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। 
3. সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। 
4. এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া।
5. এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে।  */
function bestFriend(friends) {
    let largestFriend = friends[0];
    
    for (let i = 1; i < friends.length; i++) {
      if (friends[i].length > largestFriend.length) {
        largestFriend = friends[i];
      }
    }
    
    return largestFriend;
  }
  
let myFriend = ['Mahedi', 'Rifat', 'Nafis fus fus' , 'Siam']; 
let sent = bestFriend(myFriend);
console.log(sent);