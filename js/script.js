/*global $, alert, console*/
$(document).ready(function () {
    'use strict';
    
    $(".carousel").carousel({
        interval: 2000
    });
    
    //// Show color option //////////
    
    $('.gear').click(function () {
        
        $('.color-option').fadeToggle();
        
    });
    
    ///////////// scroll to top ////////////////////
    
    var scrollButton = $('#scroll-top');
    
    $(window).scroll(function () {
       
        
        if ($(this).scrollTop() >= 620) {
            
            scrollButton.show();
            
        } else {
            
            scrollButton.hide();
        }
        
        scrollButton.click(function () {
            $('html,body').stop().animate({scrollTop: 0}, 600);
            
        });
    });
    
    
///////// nice scroll /////////////////////////////////////////////
    
    $('html').niceScroll();
    
    
    
    
    
    
    
});

////////// loading screen //////////////////////////////////////////



$(window).on("load", function () {
    
    'use strict';
    
    $('.loading-overlay .sk-fading-circle').fadeOut(500, function () {
        $(this).parent().fadeOut(500, function () {
            
            $('body').css("overflow", "auto");
            $(this).remove();
        });
        
    });
    
    
    
    
    
});

















