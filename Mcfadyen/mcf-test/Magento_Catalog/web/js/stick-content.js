require([ "jquery" ], function($){   
    $(window).scroll(function(){
      if ($(this).scrollTop() > 120) {
          $('.product.info.detailed, .product-info-main').addClass('fixed');
      } else {
          $('.product.info.detailed, .product-info-main').removeClass('fixed');
      }
      if($(window).scrollTop() + $(window).height() > ($(document).height() - 100) ) {
       // Bottom
       $(".product.info.detailed, .product-info-main").removeClass('fixed');
      }
  });
});