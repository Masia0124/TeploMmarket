$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $(".fa-close").click(function () {
        $('.catalog-viewport').removeClass('catalog-viewport__active');
        $('.catalog-viewport__inner').removeClass('catalog-viewport__inner__active');
    })
    $("#categories").click(function () {
        $('.catalog-viewport').addClass('catalog-viewport__active');
        $('.catalog-viewport__inner').addClass('catalog-viewport__inner__active');
    })
});