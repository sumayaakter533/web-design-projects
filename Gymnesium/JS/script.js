///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 612) {
            $('#navbar_top').addClass("fixed-top");
            // add padding top to show content behind navbar
            $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        } else {
            $('#navbar_top').removeClass("fixed-top");
            // remove padding top from body
            $('body').css('padding-top', '0');
        }
    });
} // end if



// Select all links with hashes
$('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {

        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top -50
                }, 1000, function () {

                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });



$(function () {
    'use strict';

    //Banner slider start

    $('#banner_part').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        dots: true,
        arrows: true,
        nextArrow: '<i class="fas fa-angle-right nxt_arr"></i>',
        prevArrow: '<i class="fas fa-angle-left prv_arr"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: true,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: true,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
  ]
    });


    //Back to top button js start

    $('.bk_to_top').on('click', function () {
        $('html,body').animate({
            scrollTop: 0,
        }, 2000)

    });

    $(window).on('scroll', function () {
        var btn_scroll = $(this).scrollTop();


        if (btn_scroll > 150) {
            $('.bk_to_top').fadeIn();
        } else {
            $('.bk_to_top').fadeOut();
        }

    });


    // About video js start

    //    $('.venobox').venobox({
    //        framewidth : '680px', 
    //        frameheight: '480px',
    //        closeColor: '#f1f1f1',
    //    }); 
    //    

    //About video js start
    //
    //    $('.venobox').venobox({
    //        framewidth: '380px',
    //        frameheight: '380px',
    //        border: '5px',
    //        closeColor: '#f1f1f1',
    //        nextArrow: '<i class="fas fa-chevron-right next-arrow"></i>',
    //        prevArrow: '<i class="fas fa-chevron-left prev_arrow"></i>',
    //    });
    //    
    //    

    //Team slider start

    $('.team').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        //        nextArrow: '<i class="fas fa-angle-right next_arr"></i>',
        //        prevArrow: '<i class="fas fa-angle-left prev_arr"></i>',
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                    arrows: false,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    arrows: false,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: '<i class="fas fa-angle-right next_arr"></i>',
                    prevArrow: '<i class="fas fa-angle-left prev_arr"></i>',
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: true,
                    nextArrow: '<i class="fas fa-angle-right next_arr"></i>',
                    prevArrow: '<i class="fas fa-angle-left prev_arr"></i>',
                }
    },
  ]
    });


    //About video js start

    $('.venobox').venobox({
        border: '5px',
        arrowsColor: '#fff',
    });



    //Testimonial slider start

    $('.testi').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
    },
  ]

    });


    //Counter Up js start

    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });


    //Class btm js start

    $('#cls_btm').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false,
                }
    },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
    },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
    },
  ]
    });



});
