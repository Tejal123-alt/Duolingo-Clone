$(document).ready(function(){

    /* Start Lesson Button
       Opens Lesson 1 Page*/

    $("#startLesson").click(function(){

        alert("Lesson 1 Started!");

        window.location.href = "lesson1.html";

    });


    /* Profile Button
       Opens User Profile Page */

    $("#profileBtn").click(function(){

        window.location.href = "profile.html";

    });

});