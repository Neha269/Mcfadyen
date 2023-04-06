define([
    'jquery',
    'jquery/ui'
], function($) {
   $(document).ready(function() {
        $('.block-search').click(function(){
            $('input[name=q]').focus();
        });

        $(window).on("resize", function (e) {
            checkScreenSize();
        });

        checkScreenSize();

        function checkScreenSize(){
            var newWindowWidth = $(window).width();
            if (newWindowWidth < 768) {
                $('.s2-header-search').insertAfter('.header.links.wrapper');
            }
            else
            {
                $('.s2-header-search').insertBefore('.minicart-wrapper');
            }
        }
    });

    $(document).mouseup(function(e) 
    {
        var container = $(".block-search");

        if (!container.is(e.target) && container.has(e.target).length === 0) 
        {
            $('.block-search .block-content').each(function() {
                if($(this).is('[style]'))
                {
                    $(".block-search .block-content").hide();
                }
            });
        }
    });
});
