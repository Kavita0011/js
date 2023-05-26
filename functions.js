// function ex st or function declaration
function sumtext(){
    console.log("this will not print function");
}
// function expression
let sumval=function(a,b){
    console.log(" sum is = "+a+b);
}
// passing a function into another function as arguments
var b =function hello(para1){
    // function (){
         console.log(para1);
    // }
}
function pass_fun(){
   console.log("passing this function")
}
// notes 
// when we use function in place of variable e.g., as a args or returned as variable is known as first class functions
// b(function pass_fun(){
   // console.log("passing this function")
// });
b(pass_fun);
// hello();
sumval(6,8);
sumtext();
