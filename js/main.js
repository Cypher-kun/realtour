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
