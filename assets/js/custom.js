  
  /*** Swiper Slider ***/

  var swiper = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
}); 


/* Sticky */

$(window).on("scroll", function(e) {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 100) {
        $(".sticky-nav").addClass("menu-fixed animated fadeInDown");
    } else {
        $(".sticky-nav").removeClass("menu-fixed animated fadeInDown");
    }
});

/* International course */

$('.custom-owl').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})

/* General saefty course */

$('.custom-owl-two').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    dots:false,
    navText : [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})