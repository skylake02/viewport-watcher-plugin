$(function () {
    
    var $window = $(window),
        $observed = $(/* OBSERVED ELEMENT HERE*/);
    
    function check_if_in_view() {
        var window_height = $window.height(),
            window_top_position = $window.scrollTop(),
            window_bottom_position = (window_top_position + window_height),
            
            obsEl_height = $observed.outerHeight(),
            obsEl_top_position = $observed.offset().top,
            obsEl_bottom_position = (obsEl_top_position + obsEl_height);
        
        
        if ((obsEl_bottom_position <= window_bottom_position) &&
                (obsEl_top_position >= window_top_position)) {
            /* FUNCTIONALITY HERE */
        }
    }
    
    $window.on('scroll resize', check_if_in_view);
    
});