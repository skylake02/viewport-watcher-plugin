/*global $*/
/*global console*/

$(function () {
    'use strict';
    
    $(document).scrollTop(0);
    
    var $window = $(window),
        $observed = $('.progress-bars'),
        $animation_elements = $('.progress-value');
    
    function check_if_in_view() {
        var window_height = $window.height(),
            window_top_position = $window.scrollTop(),
            window_bottom_position = (window_top_position + window_height),
            
            wrapper_height = $observed.outerHeight(),
            wrapper_top_position = $observed.offset().top,
            wrapper_bottom_position = (wrapper_top_position + wrapper_height);
        
        
        if ((wrapper_bottom_position <= window_bottom_position) &&
                (wrapper_top_position >= window_top_position)) {
            $.each($animation_elements, function () {
                var $element = $(this);
                $element.width($element.text() + '%');
            });
        }
    }
    
    $window.on('scroll resize', check_if_in_view);
    
});