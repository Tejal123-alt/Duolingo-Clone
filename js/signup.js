$(document).ready(function(){

$("#signupForm").submit(function(e){

e.preventDefault();

let name = $("#fullName").val();
let email = $("#email").val();
let password = $("#password").val();
let confirmPassword = $("#confirmPassword").val();

if(password !== confirmPassword){

alert("Passwords do not match");

return;

}

localStorage.setItem(
"userName",
name
);

localStorage.setItem(
"userEmail",
email
);

localStorage.setItem(
"userPassword",
password
);

alert(
"Account Created Successfully!"
);

window.location.href =
"languages.html";

});

});