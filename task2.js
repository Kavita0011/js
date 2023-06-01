// given fruitsDb array in task
var fruitsDb = ["apple","banana","orange","pineapple","grapes","avacado","strawberry"];
// given mixedfruitaaray in task
var mixedFruitArr = ["grapes", "cabage", "tomato", "banana"];
// calling dOM in variables
let Result=document.getElementById("result");
//function to filter elements in array
function filterfruits(fruitsDb, mixedFruitArr) {
// to get elements into new array
  var filtered_fruits = [];
//  for loop to iterate over fruitsDb array  
  for (let fruitsDb_element of fruitsDb) {
    // console.log(fruitsDb[i]);
    // for loop to iterate over mixedFruitArr array
    for (let mixedFruitArr_element of mixedFruitArr) {
      // console.log(mixedFruitArr[j]);
    //   condition to compare  particular element of fruitsDb array  
      if (fruitsDb_element === mixedFruitArr_element) {
        filtered_fruits.push(fruitsDb_element);
      }
    }
  }
 return filtered_fruits;
}
// displaying array fruitsDb
Result.innerHTML =
" fruitsDb array is : " + JSON.stringify(fruitsDb) + "<br><br>";
// displaying array mixedFruitArr
Result.innerHTML +=
" mixedFruitsArr array is : " +
JSON.stringify(mixedFruitArr) +
"<br><br>";
// displaying array filteredfruits array
Result.innerHTML +=
"<br> filtered array is : " +
JSON.stringify(filterfruits(fruitsDb, mixedFruitArr)) +
" <br><br>";
