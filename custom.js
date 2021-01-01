/******************
    User custom JS
    ---------------
   Put JS-functions for your template here.
   If possible use a closure, or add them to the general Template Object 'Template'
*/
// $(document).on('ready pjax:scriptcomplete',function(){
//     /**
//      * Code included inside this will only run once the page Document Object Model (DOM) is ready for JavaScript code to execute
//      * @see https://learn.jquery.com/using-jquery-core/document-ready/
//      */
// });
// sortable
$(document).ready(function () {
    var el = document.getElementById('items');
    var sortable = Sortable.create(el, {
        animation: 200,
        group: {
            name: "shared",
            pull: "clone",
            revertClone: true,
        },
        sort: true
    });
});
//progress bar
$(document).ready(function () { });
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;
$(document).ready(function () {
    $(".next").click(function () {
        if (animating) return false;
        animating = true;
        current_fs = $(this).parent();
        next_fs = $(this).parent().next();
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        next_fs.show();
        current_fs.animate({ opacity: 0 }, {
            step: function (now, mx) {
                scale = 1 - (1 - now) * 0.2;
                left = (now * 50) + "%";
                opacity = 1 - now;
                current_fs.css({
                    'position': 'absolute'
                });
                next_fs.css({ 'left': left, 'opacity': opacity });
            },
            duration: 800,
            complete: function () {
                current_fs.hide();
                animating = false;
            },
            easing: 'easeInOutBack'
        });
    });
});
$(".submit").click(function () {
    return false;
})
// slider
$(document).ready(function () {
    var status = "bad";
    $("#slider").slider({
        orientation: "vertical",
        range: "min",
        min: 1,
        max: 5,
        value: 1,
        step: 1,
        slide: function (event, ui) {
            switch (ui.value) {
                case 1:
                    status = "bad";
                    break;
                case 2:
                    status = "fair";
                    break;
                case 3:
                    status = "good";
                    break;
                case 4:
                    status = "very good";
                    break;
                case 5:
                    status = "awesome";
                    break;
            }
            $("#amount").text(status);
        }
    }).each(function () {
        var opt = $(this).data().uiSlider.options;
        var vals = opt.max - opt.min;
        for (var i = 0; i <= vals; i++) {
            var el = $('<label>' + (i + 1) + '</label>').css('bottom', ((i / vals * 100) - 6) + '%');
            $("#slider").append(el);
        }
    });
    $("#amount").text(status);
});
$(document).ready(function () {
    $(".submit").hide();
});
// emojis
function emojisEvent(num) {
    if (num == 'one') {
        $(".neutral").hide();
        $(".happy").hide();
        $(".neutral-label").hide();
        $(".happy-label").hide();
    } else if (num == 'two') {
        $(".sad").hide();
        $(".happy").hide();
        $(".sad-label").hide();
        $(".happy-label").hide();
    } else {
        $(".sad").hide();
        $(".neutral").hide();
        $(".sad-label").hide();
        $(".neutral-label").hide();
    }
    var display_cheque_field = document.getElementById("display_cheque_field");
    display_cheque_field.style.display = "block";
    $(".submit").show();
}
