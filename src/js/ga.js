(function ($) {
    "use strict"; // Start of use strict	

    $(window).on('activate.bs.scrollspy', function (event) {
        var element = $('a.nav-link.active');
        var event = element.attr('href').replace('#', '');
        gtag('event', `visualizou ${event}`, {
            'event_category': event
        });
    })

    $('.js-scroll-trigger').on('click', function () {
        var event = $(this).attr('href').replace('#', '');
        gtag('event', `clicou no menu ${event}`, {
            'event_category': event
        });
    });

    $('.gtag').on('click', function () {
        var action = $(this).data('action');
        var category = $(this).data('category');
        gtag('event', action, {
            'event_category': category
        });
    });


})(jQuery); // End of use strict
