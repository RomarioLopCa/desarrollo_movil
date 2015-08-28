$(document).ready(function () {
    $("#clickMe").click(function () {
        $("img").fadeIn(1000);
        $("#picFrame").slideToggle("slow");
    });

});