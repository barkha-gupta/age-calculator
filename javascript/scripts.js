let date= document.querySelector("#date");
let month= document.querySelector("#month");
let year= document.querySelector("#year");
let dateValue;
let monthValue;
let yearValue;
date.addEventListener("input", (e) =>{
    dateValue=  e.target.value;
    if(dateValue.length > 1 ){
       date.disabled= true;
    }
    date.disabled= false;
})
month.addEventListener("input", (e) =>{
    monthValue=  e.target.value;
    if(monthValue.length > 1 ){
        month.disabled= true;
    }
    month.disabled= false;
})
year.addEventListener("input", (e) =>{
    yearValue=  e.target.value;
    if(yearValue.length > 3){
        year.disabled= true;
    }
    year.disabled= false;
})
let form= document.querySelector("form");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(date.value === ""){
        document.querySelector(".error").innerHTML= "Date field empty!";
        return
    }
    if(month.value === ""){
        document.querySelector(".error").innerHTML= "Month field empty!";
        return
    }
    if(year.value === ""){
        document.querySelector(".error").innerHTML= "Year field empty!";
        return
    }

    if(date.value < 1 || date.value > 31){
        let text= prompt("entered date wrong.Please enter correct date");
        date.value= text
    }
    if(month.value < 1 || month.value > 12){
        let text= prompt("entered month wrong.Please enter correct month");
        month.value= text
    }
   
    if(date.value && month.value && year.value){
        document.querySelector(".error").classList.add("no-show");
        let result= document.querySelector(".result");
        result.classList.remove("no-show");
        let todaydate= new Date().getDate();
        let todayMonth= new Date().getMonth();
        let todayYear= new Date().getFullYear();
        console.log(todayYear, todayMonth, todaydate);
        let days= Math.abs(todaydate - date.value);
        let months= Math.abs(todayMonth - month.value);
        let years= Math.abs(todayYear - year.value);
        result.innerHTML= `Your Age is ${years} Years ${months} Months ${days} Days`;
    }
})