// search box
$(".search_icon").hover(function () {
    $(".search_box").addClass("search_click")
});
// search box
// preloader
$(window).load(function () {
    $('#preloader').delay(300).fadeOut()
});
// preloader
// Back to top button
$(window).scroll(function () {
    if ($(this).scrollTop() > 80) {
        $('.back2top').fadeIn('slow');
    } else {
        $('.back2top').fadeOut('slow');
    };
});
// Back to top button

// navbar scrolling
$(window).scroll(function () {
    var scrolling = $(window).scrollTop();

    if (scrolling > 70) {
        $('.menu_bg').addClass('bg')
    } else {
        $('.menu_bg').removeClass('bg')
    };
});
// navbar scrolling

// counter up
jQuery(document).ready(function ($) {
    $('#number_1').countMe(40, 65);
    $('#number_2').countMe(40, 65);
    $('#number_3').countMe(40, 65);
    $('#number_4').countMe(40, 65);
    $('#number_5').countMe(40, 65);
});

// counter up

// partner slider
$('.partner_slider').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    padding: 0,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        },
    },
    {
        breakpoint: 575,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1
        }
    }
]
});
// partner slider
// banner slider
$('.banner_slide').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    speed: 2000,
    fade: true,
    cssEase: 'linear',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
});
// banner slider
// latest slider
$('.latest_slide').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    // speed: 2000,
    // fade: true,
    cssEase: 'linear',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    padding: 0,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
]
});
// latest slider

// testimonial slider
$('.testimonial_slide').slick({
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: false,
    infinite: true,
    cssEase: 'linear',
    nextArrow: '<i class="fa-solid fa-angle-right next"></i>',
    prevArrow: '<i class="fa-solid fa-angle-left prev"></i>',
    padding: 0,
    responsive: [{
        breakpoint: 768,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
        }
    },
]
});
// testimonial slider
// 991px navbar
$('.menu_btn').click(function () {
	$('.navbar .menu_bar').toggleClass('active')
});
$('.menu_btn').click(function () {
	$('.menu_btn i').toggleClass("xxxx");
});
// mixitup
var config = document.querySelector('.mixit_box');
var mixer = mixitup(config);
// mixitup

// Set the date we're counting down to
var countDownDate = new Date("sep 20, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    document.getElementById("demo1").innerHTML = days;
    document.getElementById("demo2").innerHTML = hours;
    document.getElementById("demo3").innerHTML = minutes;
    document.getElementById("demo4").innerHTML = seconds;

    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);
// launch counter

