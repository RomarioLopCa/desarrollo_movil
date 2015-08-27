/**
 * Created by romarin on 27/08/15.
 */

$(document).ready(function () {
    $('#click_me').click(function () {
        $('img').fadeIn(1000);
        $('#pic_frame').slideToggle('slow');
    })
});