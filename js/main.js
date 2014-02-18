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
