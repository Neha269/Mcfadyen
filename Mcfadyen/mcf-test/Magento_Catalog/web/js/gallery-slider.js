define(['jquery', 'slick','domReady!'], ($) => {
    $(window).resize(function(){
        if($(window).width() < 768) {
            if ($('.mobile-slick').length) { 
                $('.mobile-slick').slick({ 
                    slidesToShow: 1, 
                    centerMode: false, 
                    infinite: true, 
                    arrows: false, 
                    dots: true, 
                    slidesToScroll: 1,
                    lazyLoad: 'progressive',
                    centerMode: true,
                    centerPadding:'30px',
                    rows: 1,
                    responsive: [ 
                        { 
                            breakpoint: 768, 
                            settings: { 
                                slidesToShow: 1,
                                slidesToScroll: 1, 
                            } 
                        }
                    ] 
                }); 
            }
        }
    });
});