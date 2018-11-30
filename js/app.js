/* Mobile menu button */
const menuBtn = document.getElementsByClassName("menu-btn");

const mobileMenu = document.getElementsByClassName("mobile-menu");

const clickedBtn = function() {
  mobileMenu[0].classList.toggle("active");
};

menuBtn[0].addEventListener("click", clickedBtn);
console.log(menuBtn[0]);

/*menuBtn[0].addEventListener('click',function(){
    mobileMenu[0].classList.toggle('active');
});*/

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
});

/* Fade-in effect */
$(document).ready(function() {
  $("body").removeClass("fade-out");
});
