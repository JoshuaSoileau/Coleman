jQuery(function($) {
    $('.see-more').click(function() {
        $(this).parent().toggleClass('height-auto');
    });
    $(".menu a").click(function() {
        $(".state-visible").removeClass("state-visible"),
        $(".state-fixed").removeClass("state-fixed"),
        $(".state-opened").removeClass("state-opened")
    });
});
