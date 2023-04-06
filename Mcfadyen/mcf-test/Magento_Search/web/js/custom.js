/**
 * Copyright © Mcfyden ApS, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

require([ 'jquery', 'jquery/ui'], function($){
    $('.block-search .block-title').on('click', function(){
        $('.block-search .block-content').toggle();
    });
});
