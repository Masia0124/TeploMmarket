$(document).ready(function () {
    $(".slider").slick({
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 4000,
    });


    $(".carts").slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        variableWidth: true,
        autoplay: false,
        infinite: false,
    });


    $(".fa-close").click(function () {
        $('.catalog-viewport').removeClass('catalog-viewport__active');
        $('.catalog-viewport__inner').removeClass('catalog-viewport__inner__active');
    })
    $("#categories").click(function () {
        $('.catalog-viewport').addClass('catalog-viewport__active');
        $('.catalog-viewport__inner').addClass('catalog-viewport__inner__active');
    })


   $(document).on('click', '.dropdawn', function(e){
     e.preventDefault();
     let submenu = $(this).children('.dropdawn_list');
       $('.dropdawn').not(this).removeClass('active').children('.dropdawn_list').slideUp();
      submenu.slideToggle();
      $(this).toggleClass('active');
    });
    
});