// GOAL PAGE
// goal.html → reason.html

$(document).ready(function () {

    $(".goal-card").click(function () {

        $(".goal-card").removeClass("active");
        $(this).addClass("active");

        $("#goalContinueBtn").prop("disabled", false);

    });

    $("#goalContinueBtn").click(function () {

        window.location.href = "reason.html";

    });

});


// REASON PAGE
// reason.html → experience.html

$(document).ready(function () {

    $(".reason-card").click(function () {

        $(".reason-card").removeClass("active");
        $(this).addClass("active");

        $("#reasonContinueBtn").prop("disabled", false);

    });

    $("#reasonContinueBtn").click(function () {

        window.location.href = "experience.html";

    });

});



// EXPERIENCE PAGE
// experience.html → loading.html

$(document).ready(function () {

    $(".experience-card").click(function () {

        $(".experience-card").removeClass("selected");

        $(this).addClass("selected");

        $("#continueBtn").prop("disabled", false);

    });

    $("#continueBtn").click(function () {

        let experience = $(".experience-card.selected").text().trim();

        localStorage.setItem("experience", experience);

        window.location.href = "loading.html";

    });

});