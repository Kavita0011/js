let ar1,ar2;
let ar3=[],ar4=[];
 sum=0;
ar1=[1,3,6,2,4];
ar2=[2,0,4,1,2];
 for (let index = 0; index < ar1.length; index++) {
     sum =ar1[index]+ar2[index];
     ar3.push(sum);
 }

document.write( " array1 is ", ar1);
document.write( "<br> array2 is ", ar2);
document.write( "<br> array3 is ", ar3);

len=ar3.length;

for (let outer = 0; outer < len; outer++) {
for (let inner = 0; inner < len; inner++) {
if( ar3[outer]>=ar3[inner]){
let temp=ar3[outer];
  ar3[outer]=ar3[inner];
  ar3[inner]=temp;
 }}}
for (let filter = 0; filter < len; filter++) {
 if(ar3[filter] !==ar3[filter+1]){
  ar4.push(ar3[filter]);
}}
document.write(" <br>  array 4 is ",ar4);