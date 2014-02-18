/*
 * Placeholder fix init
 */

$(document).on('ready', function(){
    $('.no-placeholder input[placeholder], .no-placeholder textarea[placeholder]').placeholder();
});


/*
 * Work time touch
 */

$(document).on('ready', function(){
    $('.touch .work-time__week__item').on('click', function(){
        $(this).find('.work-time__week__item__time').fadeToggle();
    });
});

$(document).on('ready', function(){
    $('.gallery__item__link').fancybox();
});


$(document).on('ready', function(){
    (function($) {
        $(function() {
            $('.feedback-widget__carousel').jcarousel({'wrap':'circular'});
            $('.feedback-widget__prev').jcarouselControl({ target: '-=1' });
            $('.feedback-widget__next').jcarouselControl({ target: '+=1' });
        });
    })(jQuery);

});


/* sticky sidebar */
jQuery(document).ready(function ($) {

    var $sidebarSlot  = $('.sidebar__item_sticky');
    var $sidebarBlock = $('.sidebar__item__detachable');

    var stickyPosition;
    var windowScrolled;
    var isSticked;
    var isWideEnough;

    function getIsWideEnough() {
        return $(window).width() > 1000 ? true : false;
    }

    function stickSidebar() {
        isSticked = true;
        $sidebarBlock.addClass('sidebar__item__detachable_sticked');
    }

    function unstickSidebar() {
        isSticked = false;
        $sidebarBlock.removeClass('sidebar__item__detachable_sticked');
    }


    function sidebarStickingByWindowScroll() {
        if( isWideEnough ) {
            windowScrolled = $(window).scrollTop();
            if ( ! isSticked && windowScrolled >= stickyPosition) stickSidebar();
            if (   isSticked && windowScrolled <  stickyPosition) unstickSidebar();
        }
    }

    function sidebarStickingByWindowResize() {
        stickyPosition = $sidebarSlot.offset().top;
        isWideEnough = getIsWideEnough();

        if( isWideEnough ) {
            sidebarStickingByWindowScroll();
        }
        else if( isSticked ) {
            unstickSidebar();
        }

    }


    function init() {
        stickyPosition = $sidebarSlot.offset().top;
        windowScrolled = $(window).scrollTop();
        isWideEnough = getIsWideEnough();
        isSticked = false;
        sidebarStickingByWindowScroll();
    }

    $(window).on('scroll', sidebarStickingByWindowScroll );
    $(window).on('resize', sidebarStickingByWindowResize );
    $(window).on('load', init );

});