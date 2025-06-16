let button = document.querySelector("button");
let result= document.querySelector(".result-text");

button.addEventListener("click", function() {
    let weather = document.querySelector(".weather").value;
    
    // 1. Write a conditional statement:

    if (weather==="rainy") {
       document.querySelector("p").innerHTML="bring an umbrella"
    } else {
        document.querySelector("p").innerHTML="Enjoy the Sun";
    }
    //  - If the input is "rainy", change the text in the paragraph tag to "Bring an umbrella!"
    //  - Else, change the text in the paragraph tag to "Enjoy the sun!"


});