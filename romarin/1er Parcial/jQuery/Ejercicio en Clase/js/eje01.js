/**
 * Created by romarin on 27/08/15.
 */

$(document).ready(function () {
    $('#move_up').click(function () {
        $("#change_me").animate({top: 150}, 2000);
    });

    $('#move_down').click(function () {
        $("#change_me").animate({top: 300}, 2000);
    });

    var colors = ["red", "blue", "yellow", "black", "green"];

    $('#color').click(function () {
        $('#change_me').css('color', colors[Math.floor(Math.random() * colors.length)])
    });

    $('#disappear').click(function () {
        $('#change_me').toggle('slow');
    });

});