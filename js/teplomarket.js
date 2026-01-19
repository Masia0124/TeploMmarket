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


    $(".checkbox > i").click(function () {
        //alert('click');
        //$('.checkbox_done').toggleClass('checkbox_done_active');
       $(this).toggleClass('checkbox_done_active');
    })


    $(".filter_mobile").click(function () { 
  
        $('.filter_aside').toggleClass('filter_aside_active');

    })
     



//    $(document).on('click', '.dropdawn_title', function(e){
//      e.preventDefault();
//      let submenu = $(this).children('.dropdawn_list');
//        $('.dropdawn').not(this).removeClass('active').children('.dropdawn_list').slideUp();
//       submenu.slideToggle();
//       $(this).toggleClass('active');
    //     });
    
    $(document).on('click', '.filter-title', function (a) { 
        a.preventDefault();

        let filterDiv = $(this).next('.filter-list');
        filterDiv.slideToggle();
    })
    


$(document).on('click', '.dropdawn_title', function (e) {
      
    e.preventDefault();

  
    let submenu = $(this).next('.dropdawn_list');
    let submenuAll = $('.dropdawn_list');
    let thisTitle = $(this);
   
    submenuAll.not(submenu).slideUp();
    submenu.slideToggle();
    $('.dropdawn_title').not(thisTitle).removeClass('active');
    $(this).toggleClass('active');
});



















});