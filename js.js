var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

input1.addEventListener("input",colorBackground);
input2.addEventListener("input",colorBackground);

function colorBackground(){
    body.style.background = "linear-gradient(to right, " +  input1.value + ", " + input2.value + ")";
    css.textContent = body.style.background + ";";
}