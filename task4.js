// emp:List object given in task
var empList = [
  {
    name: "John Doe",
    dept: "php",
    empId: 5,
  },
  {
    name: "Paul Smith",
    dept: "MERN",
    empId: 4,
  },
  {
    name: "Tom Smith",
    dept: "SEO",
    empId: 7,
  },
];
// function to print objects
function Print_obj(EmpList) {
  var txt = "";
//   coverting objects into array
  let entries = Object.entries(empList);
  //  document.write(JSON.stringify(empList));
//   to print objects
  for (let i in empList) {
    txt += " { <br>";
    //getting object keys, printing object through keys in key value pair
    Object.keys(empList[i]).forEach(function (key) {
      txt += key + " : " + empList[i][key] + " , <br>";
    });
    txt += " } <br>";
  }
  return txt;
}
// function to sort objects
function sort_objects(empList) {
  let len = empList.length;
  for (let outer = 0; outer < len; outer++) {
    for (let inner = 0; inner < len; inner++) {
      if (empList[outer].empId < empList[inner].empId) {
        var temp = empList[outer].empId;
        empList[outer].empId = empList[inner].empId;
        empList[inner].empId = temp;
      }
    }
  }
  return empList;
}
// displaying objects in result
document.getElementById("result").innerHTML =
  "the original object is : <br> " + Print_obj(empList) + "<br><br>";
document.getElementById("result").innerHTML +=
  "object after sorting is : <br> " + Print_obj(sort_objects(empList));