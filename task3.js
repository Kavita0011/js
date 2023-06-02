function date_diffrence(date1, date2) {
  diffrence_seconds = Math.abs((date1 - date2) / 1000);
  // document.write(diffrence_seconds);
  //console.log("the result is : "+month*diffrence_month);
  //console.log("the result is : "+year*diffrence_year);
  const year = Math.floor(365 * 24 * 60 * 60);
  const day = Math.floor(1 * 24 * 60 * 60);
  const month = Math.floor(30.4167 * 24 * 60 * 60);
  // calculating years

  let diffrence_year = Math.floor((diffrence_seconds) / year);
  // console.log("diffrence year : "+diffrence_year);

  let diffrence_month = Math.floor((diffrence_seconds - (year * diffrence_year)) / month);
  // console.log("diffrence month : "+diffrence_month);

  let diffrence_day = Math.floor((diffrence_seconds - (month * diffrence_month) - (year * diffrence_year)) / day);
  // console.log("diffrence day : "+diffrence_day );
  if (diffrence_year !== 0) {
      result1 = `${diffrence_year} year, ${diffrence_month} months , ${diffrence_day} days `;
  }
  else {
      result1 = ` ${diffrence_month} months ,${diffrence_day} days `;
  }
  console.log(result1);
  return "the result is : " + result1;
  document.write("the result is : " + result1);
}
// to get parameter from current url of web page
let dates_query_string =location.search ;
console.log(dates_query_string);
// to store values
let url_parameters = new URLSearchParams(dates_query_string);
let date_1 = url_parameters.get('date1');
let date_2 = url_parameters.get('date2');
let date1 = new Date(date_1);
let date2 = new Date(date_2);
// console.log(JSON.parse(url_parameters));
// console.log(typeof url_parameters);
if (typeof url_parameters === "String"){
console.log("str is a date type");
}
//console.log(date_1);
//console.log(date_2);
document.getElementById("result").innerHTML = date_diffrence(date1, date2);
