(function($) {
  "use strict"; // Start of use strict

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 60) {
      $("#mainNav").addClass("navbar-shrink");
      $("#mainNav .navbar-brand img.black").hide();
      $("#mainNav .navbar-brand img.white").show();
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      $("#mainNav .navbar-brand img.white").hide();
      $("#mainNav .navbar-brand img.black").show();
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict