var swiper = new Swiper(".presentation", {
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });



//king deals slider
var swiper = new Swiper(".swiper2", {
    slidesPerView: 3.2,
    spaceBetween: 60,
    slidesPerGroup: 3.5,
    loop: false,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });