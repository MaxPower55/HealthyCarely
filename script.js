$(document).ready(function(){
    $('.photo').slick({
        arrows: true,
        appendArrows: $('.slider'),
        prevArrow: $('#prevArrow'),
        nextArrow: $('#nextArrow'),
        fade: true,
        asNavFor: ".naming, .descr",
    });
});

$(document).ready(function(){
$('.naming').slick({
    arrows: false,
    asNavFor: ".photo, .descr",
    fade: true,
    draggable: false,
    });
});

$(document).ready(function(){
    $('.descr').slick({
        arrows: false,
        asNavFor: ".photo, .naming",
        fade: true,
        draggable: false,
        });
    });