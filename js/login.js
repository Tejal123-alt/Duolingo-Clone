$(document).ready(function(){

$("#loginForm").submit(function(e){

e.preventDefault();

let user = $("#username").val();

let pass = $("#password").val();

if(user === "" || pass === ""){

alert("Please fill all fields");

return;

}

localStorage.setItem(
"username",
user
);

window.location.href =
"dashboard.html";

});

});

$(document).ready(function(){

    $("#signupBtn").click(function(){

        window.location.href = "onboarding/signup.html";

    });

});


$(document).ready(function(){

$("#loginForm").submit(function(e){

e.preventDefault();

let enteredEmail =
$("#username").val();

let enteredPassword =
$("#password").val();

let savedEmail =
localStorage.getItem("userEmail");

let savedPassword =
localStorage.getItem("userPassword");

if(
enteredEmail === savedEmail &&
enteredPassword === savedPassword
){

window.location.href =
"learn.html";

}
else{

alert(
"Invalid Email or Password"
);

}

});

});