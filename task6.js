let query_string = location.search;
let url_parameters = new URLSearchParams(query_string);
let Slide = parseInt(url_parameters.get('Slide'));
//document.write(typeof Slide);
let Result=document.getElementById("result");
let Img= document.getElementById("img");
if(!Slide){
Slide=1;
Img.innerHTML = ` <img class=image src=1.jpg >`;

}
if (Slide <= 5) {
Img.innerHTML = ` <img class=image src=${Slide}.jpg >`;
}
if(Slide>1){
   Result.innerHTML += `<a class=a href=task6.html?Slide=${Slide-1}> \< prev</a>  `;
   }  
   
   for (num = 1; num <= 5; num++) {
   
    if(num==Slide  ){          
        let a_class= "active_class ";
        document.write(a_class);   
      Result.innerHTML += ` <a class=${a_class} a href=task6.html?Slide=${num}>${num}</a>`;
    }
    else{
       let a_class=" ";            
     Result.innerHTML += ` <a class=${a_class} a href=task6.html?Slide=${num}>${num}</a>`;
    }
//Result.innerHTML += ` <a class=${a_class} a href=task6.html?Slide=${num}>${num}</a>`;
    } 
    if(Slide<5 || !(Slide)){
    Result.innerHTML += `  <a class=a href=task6.html?Slide=${(Slide+1)} > next \> </a>`;
    }