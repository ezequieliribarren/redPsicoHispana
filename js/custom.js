/******************************************
    Version: 1.0
/****************************************** */

(function($) {
    "use strict";

  
    /* ==============================================
       LOADER -->
        =============================================== */

    $(window).load(function() {
        $("#preloader").on(500).fadeOut();
        $(".preloader").on(600).fadeOut("slow");
    });

    /* ==============================================
     FUN FACTS -->
     =============================================== */

    function count($this) {
        var current = parseInt($this.html(), 10);
        current = current + 50; /* Where 50 is increment */
        $this.html(++current);
        if (current > $this.data('count')) {
            $this.html($this.data('count'));
        } else {
            setTimeout(function() {
                count($this)
            }, 30);
        }
    }
    $(".stat_count, .stat_count_download").each(function() {
        $(this).data('count', parseInt($(this).html(), 10));
        $(this).html('0');
        count($(this));
    });
	
	
	/* ==============================================
     FUN FACTS -->
     =============================================== */
	
	$(".slider-wrapper").owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        autoplay: true,
        loop: true,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
        mouseDrag: false,
        touchDrag: false,
        smartSpeed: 700
    });

    /* ==============================================
     TOOLTIP -->
     =============================================== */
    $('[data-toggle="tooltip"]').tooltip()
    $('[data-toggle="popover"]').popover()

})(jQuery);