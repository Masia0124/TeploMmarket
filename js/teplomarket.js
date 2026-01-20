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
     
    $(".bag_cart").click(function () { 
        $('.shopping_bag01').addClass('shopping_bag01_active');
    })

    $(".cart-modal__close").click(function () {
        $('.shopping_bag01').removeClass('shopping_bag01_active');
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





    document.addEventListener('click', function (e) {
  if (e.target.classList.contains('qty-plus')) {
    const input = e.target.closest('.quantity-wrapper').querySelector('input');
    input.value = parseInt(input.value) + 1;
  }

  if (e.target.classList.contains('qty-minus')) {
    const input = e.target.closest('.quantity-wrapper').querySelector('input');
    const val = parseInt(input.value);
    if (val > 1) input.value = val - 1;
    }
    
   
});


// $(document).on('.product-purchase', 'button', function (e) {
//     alert('click - ');  
//     const input = e.target.closest('.quantity-wrapper').querySelector('input');
//     const val = parseInt(input.value);
//     if (val > 1) input.value = val - 1; 
// });

// $(document).on('click', '.qty-plus', function (e) {
//     alert('click + ');  
//     const input = e.target.closest('.quantity-wrapper').querySelector('input');
//     input.value = parseInt(input.value) + 1; 
// });

  









});