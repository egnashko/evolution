var hellopreloader = document.getElementById("hellopreloader_preload");function fadeOutnojquery(el){el.style.opacity = 1;var interhellopreloader = setInterval(function(){el.style.opacity = el.style.opacity - 0.05;if (el.style.opacity <=0.05){ clearInterval(interhellopreloader);hellopreloader.style.display = "none";}},16);}window.onload = function(){setTimeout(function(){fadeOutnojquery(hellopreloader);},1000);};


$(document).ready(function () {
    // navigation hide
   $('#nav_button').click(function () {
      $('nav').toggleClass('nav_hidden');
   });
});

$(function () {
    if ($(window).width() <= 992) {
        console.log('!!!');
        $('.parallax').removeClass('parallax');
        $('.wow').removeClass('wow');
    }
});

var count = $('.canv_el').length;
for (var i= 0; i <= count; i++){
    if (i == 0){
        cl = 'particles-js' + 1;
    }else{
        cl = 'particles-js' + [i];
    }
    particlesJS.load(cl, 'libs/particles/particles.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

$(document).ready(function() {
    $("#owl-demo").owlCarousel({
        autoPlay: 3000,
        items : 5,
        pagination: false,
        navigation:true,
        navigationText: false,
        itemsCustom : [
            [0, 1],
            [768, 2],
            [992, 3],
            [1500, 4],
            [1700, 5]
        ]
    });
});

$('.change_it').bind('input', function () {
    $(this).addClass('active');
   $(this).parent().children('.dot').css("opacity", "1");
});

new WOW().init();