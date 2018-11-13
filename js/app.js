//Mobile menu button
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
  $("#about-text").toggle();
});

//Scroll down
// $(".page-scroll").on('click', function(){

// });

// Fade-in effect
$(document).ready(function() {
  $("body").removeClass("fade-out");
});
