var menuBtn = document.getElementsByClassName("menu-btn"),
  mobileMenu = document.getElementsByClassName("mobile-menu"),
  clickedBtn = function() {
    mobileMenu[0].classList.toggle("active");
  };
menuBtn[0].addEventListener("click", clickedBtn),
  $("#about").on("click", function() {
    $("#about-text").toggle(600);
  }),
  $(document).ready(function() {
    $("a#scroll-up").click(function() {
      $("html, body").animate({ scrollTop: $("#top-top").offset().top }, 1e3);
    }),
      $("a#scroll-down").click(function() {
        $("html, body").animate(
          { scrollTop: $("#services-section").offset().top },
          1e3
        );
      }),
      $("a#latest").click(function() {
        $("html, body").animate(
          { scrollTop: $("#portfolio-section").offset().top },
          1e3
        );
      });
  }),
  $(document).ready(function() {
    $("body").removeClass("fade-out");
  });
