$(document).ready(function(){

let progress = 0;

let interval = setInterval(function(){

progress += 5;

$("#progressBar").css(
"width",
progress + "%"
);

$("#percentText").text(
progress + "%"
);

if(progress >= 100){

clearInterval(interval);

window.location.href =
"../learn.html";

}

},100);

});