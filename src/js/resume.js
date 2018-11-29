(function ($) {
  "use strict"; // Start of use strict	
  // Smooth scrolling using jQuery easing	
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });
  // Closes responsive menu when a scroll trigger link is clicked	
  $('.js-scroll-trigger').click(function () {
    $('.navbar-collapse').collapse('hide');
  });
  // Activate scrollspy to add active class to navbar items on scroll	
  $('body').scrollspy({
    target: '#sideNav'
  });

  // Scroll reveal calls
  window.sr = ScrollReveal();

  var animationIcons = $('.animation-icon');

  for (var i = 0; i < animationIcons.length; i++) {
    var el = animationIcons[i];
    var delay = parseInt(el.getAttribute('data-delay'), 10) || 200;
    var scale = parseInt(el.getAttribute('data-scale'), 10) || 0;

    sr.reveal(animationIcons[i], {
      delay: delay,
      scale: scale
    });
  }

})(jQuery); // End of use strict