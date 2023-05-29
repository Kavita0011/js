function date_diffrence(date1, date2) {
     diffrence_seconds=Math.abs(date_1-date_2)/1000;
    //console.log(diffrence);
    //console.log("the result is : "+month*diffrence_month);
    //console.log("the result is : "+year*diffrence_year);
    const year=Math.floor(365*24*60*60);
    const day=Math.floor(1*24*60*60);   
    const month=Math.floor(30.4167*24*60*60);
    // calculating years
     
    let diffrence_year=Math.floor((diffrence_seconds)/year);
    // console.log("diffrence year : "+diffrence_year);
    
    let diffrence_month=Math.floor((diffrence_seconds-(year*diffrence_year))/month);
    // console.log("diffrence month : "+diffrence_month);
    
    let diffrence_day=Math.floor((diffrence_seconds-(month*diffrence_month)-(year*diffrence_year))/day);
    // console.log("diffrence day : "+diffrence_day );
    if(diffrence_year!==0){
      result1=`${diffrence_year} year, ${diffrence_month} months , ${diffrence_day} days `;        
        }
        else
        {
      result1=` ${diffrence_month} months ,${diffrence_day} days `;
        }
    // console.log(result1);
    document.getElementById("result").innerHTML = result1;
}
date1=prompt("Enter first Date");
date2=prompt("Enter second Date");
const date1 = new Date(date1);
const date2 = new Date(date2);

date_diffrence(date1,date2);
//
//let dates_query_string=window.location.search;
////console.log(dates_query_string);
//let url_parameters=new URLSearchParams(dates_query_string);
//let date1=url_parameters.get('date1');
//let date2=url_parameters.get('date2');
//document.write(typeof date1);
//document.write(date2);
//date_diffrence(date1,date2);