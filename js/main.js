$(document).ready(function(){
   
    $('.brand_slider').owlCarousel({
		items:7,
		autoplay:true,
		rtl:true,
		loop: true,
		margin:18,
		nav:true,
        navText: ["<i class='fas fa-chevron-right'></i>","<i class='fas fa-chevron-left'></i>"],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			768:{
				items:3
			},
			991:{
				items:4
			},
			1199:{
				items:5
			},
			1200:{
				items:6
			}
		}
    }); 
    $('#customers-testimonials').owlCarousel({
        loop: true,
        center: true,
        items: 3,
        rtl:true,
        margin: 0,
        autoplay: true,
        dots:true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 2
          },
          1170: {
            items: 3
          }
        }
    });


$("#openNav").click( function() {

    $('.sidenav').addClass('open');
    $('.overlay').fadeIn();
    $('body').addClass('ovh');
});

$(".closebtn,.overlay").click( function() {
    $('.sidenav').removeClass('open');
    $('.overlay').fadeOut();
    $('body').removeClass('ovh');
});


});




$('.search-bar').on('click', function(event) {
    event.preventDefault();
    $('#search').addClass('open');
    $('#search > form > input[type="search"]').focus();
});

$('#search, #search button.close').on('click keyup', function(event) {
    if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
        $(this).removeClass('open');
    }
});
$("h5[data-toggle='collapse']").on('click', function() {
    $(this).parent().children('.collapse').collapse('toggle');
    $(this).parent().parent().siblings().find('.collapse.in').collapse('hide');
});

$(".down[data-toggle='collapse']").on('click', function() {
    $(this).parent().children('.collapse').collapse('toggle');
    $(this).parent().siblings().find('.collapse.in').collapse('hide');
});



   
// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $('.menu-head').addClass('fixedheader');
  } else {
    $('.menu-head').removeClass('fixedheader');
  }
}
if ($(window).width() <= 600){ 
  $(".wow").removeClass("wow");
  }






