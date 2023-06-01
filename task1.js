let Result = document.getElementById("result");
let ar1, ar2;
let ar3 = [],
  ar4 = [];
sum = 0;
ar1 = [1, 3, 6, 2, 4];
ar2 = [2, 0, 4, 1, 2];
// getting length of array
len = ar1.length;
function merge_and_filter(ar1, ar2) {
  // adding two array and sum up in into a new array ar3
  for (let index = 0; index < len; index++) {

    sum = ar1[index] + ar2[index];
    ar3.push(sum);
  }
// sorting through loops
  for (let outer = 0; outer < len; outer++) {

    for (let inner = 0; inner < len; inner++) {
      if (ar3[outer] >= ar3[inner]) {
        let temp = ar3[outer];
        ar3[outer] = ar3[inner];
        ar3[inner] = temp;
      }
    }
  }
  // finding unique values and pushing them into ar4 array
  for (let filter = 0; filter < len; filter++) {
    //condition will check current element is repeating or not 
    if (ar3[filter] !== ar3[filter + 1]) {
        // to push unique value into a new array ar4
      ar4.push(ar3[filter]);
    }
  }
  Result.innerHTML = " <br> array 4 is " + ar4;

  //document.write(" <br> array 4 is ",ar4);
}
// calling function to perform task1 ;
merge_and_filter(ar1, ar2);
// printing results here
// displaying array1
Result.innerHTML = " Array1 is : " + JSON.stringify(ar1) + "<br><br>";
// displaying array2
Result.innerHTML += " Array2 is : " + JSON.stringify(ar2) + "<br><br>";
// displaying array3 which is sum of two arrays
Result.innerHTML +=" Sum of two array  is : " + JSON.stringify(ar3) + "<br><br>";
// displaying resulting array
Result.innerHTML +=" The resulting array is : " + JSON.stringify(ar4) + "<br>";