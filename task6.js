// to get query string from current url
let query_string = location.search;
// to get the data in the URL query parameters
let url_parameters = new URLSearchParams(query_string);
// getting values from string
let Slide = parseInt(url_parameters.get("Slide"));
//document.write(typeof Slide);
let Result = document.getElementById("result");
// calling DOM
let Img = document.getElementById("img");
// set default image and initialize  slide to 1
if (!Slide) {
  Slide = 1;
  Img.innerHTML = ` <img class=image src=${Slide}.jpg >`;
}
// to show images as per slide number
if (Slide <= 5) {
  Img.innerHTML = ` <img class=image src=${Slide}.jpg >`;
}
// using prev link to jump to previous page
if (Slide > 1) {
  Result.innerHTML += `<a class=a href=task6.html?Slide=${
    Slide - 1
  }> \< prev</a>  `;
}
//    number links
for (num = 1; num <= 5; num++) {
  if (num == Slide) {
    let a_class = "active_class ";
    document.write(a_class);
    Result.innerHTML += ` <a class=${a_class} a href=task6.html?Slide=${num}>${num}</a>`;
  } else {
    let a_class = " ";
    Result.innerHTML += ` <a class=${a_class} a href=task6.html?Slide=${num}>${num}</a>`;
  }
  //Result.innerHTML += ` <a class=${a_class} a href=task6.html?Slide=${num}>${num}</a>`;
}
// using next link to jump to next page
if (Slide < 5 || !Slide) {
  Result.innerHTML += `  <a class=a href=task6.html?Slide=${
    Slide + 1
  } > next \> </a>`;
}
