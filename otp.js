function otp_generator(len){
    let otp=0;
for(let i=1;i<len;i++){
    otp +=Math.floor(Math.random()*10);
}
    return otp;
}
// otp_generator(5);

// code from stackoverflow
// generating a random nuumber
let random_num=Math.random();
console.log("genarating a random number : "+random_num);
// must start from 99999
let random_digit=random_num * 100000;
console.log("shifting decimal upto five digit : "+random_digit);
// 
let otps=99999 +random_digit;
console.log(otp);
// truncating digits after decimal
// let otp=Math.floor(otps);
// console.log("orignal otp is : "+otp);

let otp=Math.floor(99999 + Math.random() * 100000);
console.log("orignal otp is : "+otp);
