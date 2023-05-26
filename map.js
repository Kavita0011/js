let fruits=new Map([["applle",600],["vf",function my_function(){}]]); 
// let fruits=Map.set(); to directly set the values in a map
// const key1='string is here',key2={},key3=function(){};
fruits.set("apple",'price of apple is 200');
fruits.set("mango",'price of mango is 350');
fruits.set("litchi",'price of litchi is 100');
fruits.set("kiwi",'price of kiwi is 500');
fruits.set("Pineapple",'price of pineapple is 300');
console.log(fruits);
console.log(fruits.get("kiwi"));