function voting(u_name, dob) {
//   console.log(dob);
  const current_date = new Date();
  const current_year = current_date.getFullYear();
  const d_o_b = new Date(dob);
  const d_o_b_year = d_o_b.getFullYear();
  const agey = current_year - d_o_b_year;
  const age = current_date - d_o_b;
//   console.log(current_date);
//   console.log(d_o_b_year);
//   console.log(u_name);
  if (age >= 18) {
    result =
      "Dear " +
      u_name +
      ",your age is " +
      agey +
      " you are eligible for voting";
  } else {
    result =
      "Dear " +
      u_name +
      ",your age is " +
      agey +
      " you are not eligible for voting";
  }
  console.log(result);
  // document.getElementById("result").innerHTML = result;
}
voting("Shweta", "2005-03-08");