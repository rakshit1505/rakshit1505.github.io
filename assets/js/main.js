var swiper = new Swiper(".ps-testmonialSwiper", {
  slidesPerView: "auto",
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
  speed: 1000,
  centeredSlides: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    558: {
      slidesPerView: 1,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 2.5,
      spaceBetween: 12,
    },
    1024: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
  },
});
