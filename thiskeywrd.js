// using global local and this
a=4;
console.log(this);
function fun(){
    a=8;
    console.log(this);
}
fun();