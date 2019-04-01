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
      }),
      $(window).scroll(function() {
        const o = $(window).height(),
          t = $(window).scrollTop(),
          c = $("#portfolio-section").position();
        (wS = $(this).scrollTop()),
          o + t > c.top
            ? $("a#scroll-down").fadeOut(200)
            : $("a#scroll-down").fadeIn(200);
      });
  }),
  $(document).ready(function() {
    $("body").removeClass("fade-out");
  });
