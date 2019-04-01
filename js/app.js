//About me text toggle
$("#about").on("click", function() {
  $("#about-text").toggle(600);
});

/* Scrolling */

$(document).ready(function() {
  $("a#scroll-up").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#top-top").offset().top
      },
      1000
    );
  });
  //scroll down
  $("a#scroll-down").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#services-section").offset().top
      },
      1000
    );
  });
  $("a#latest").click(function() {
    $("html, body").animate(
      {
        scrollTop: $("#portfolio-section").offset().top
      },
      1000
    );
  });
  $(window).scroll(function() {
    const height = $(window).height();
    const scrollTop = $(window).scrollTop();
    const obj = $("#portfolio-section");
    const pos = obj.position();
    wS = $(this).scrollTop();
    if (height + scrollTop > pos.top) {
      $("a#scroll-down").fadeOut(200);
    } else {
      $("a#scroll-down").fadeIn(200);
    }
  });
});

/* Fade-in effect */
$(document).ready(function() {
  $("body").removeClass("fade-out");
});
