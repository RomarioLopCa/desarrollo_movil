$(document).ready(function(){
    $("#moveUp").click(function(){
        $("#changeMe").animate({top:30},2000);
    });
    $("#moveDown").click(function(){
        $("#changeMe").animate({top:500},2000);
    });
    $("#color").click(function(){
        $("#changeMe").css("color","blue");
    });
    $("#disappear").click(function(){
        $("#changeMe").toggle("slow");
    });
});

