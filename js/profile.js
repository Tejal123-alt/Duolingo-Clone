$(document).ready(function(){

let userName =
localStorage.getItem("userName");

let userEmail =
localStorage.getItem("userEmail");

if(userName){

$("#userName").text(userName);

}

if(userEmail){

$("#userEmail").text(userEmail);

}

$("#logoutBtn").click(function(){

localStorage.removeItem("userName");
localStorage.removeItem("userEmail");
localStorage.removeItem("userPassword");

window.location.href =
"login.html";

});

});