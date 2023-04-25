var swiper = new Swiper(".presentation", {
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



//king deals slider
var swiper = new Swiper(".swiper2", {
  slidesPerView: 9,
  spaceBetween: 10,
  slidesPerGroup: 9,
  loop: false,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});