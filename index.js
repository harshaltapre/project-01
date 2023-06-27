AOS.init();

   var $win = $(window),
      $navbar = $('.x-navbar');
  function staticNavbarOnTop() {
    if ( $win.scrollTop() < 300 ) {
      $navbar.addClass('mi-static-top');
    } else {
      $navbar.removeClass('mi-static-top');
    }
  }

  staticNavbarOnTop();
  $win.scroll( staticNavbarOnTop );

