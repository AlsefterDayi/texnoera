document
  .querySelector(".search-collapse-btn")
  .addEventListener("click", function () {
    document.querySelector(".search_form").classList.toggle("active");
    document.querySelector(".search-collapse-btn").classList.toggle("active");
  });
document
  .querySelector(".nav-collapse-btn")
  .addEventListener("click", function () {
    document.querySelector(".main_nav").classList.toggle("active");
    document.querySelector(".nav-collapse-btn").classList.toggle("active");
  });
var swiper1 = new Swiper(".hero_slide", {
  spaceBetween: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  loop: true,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});

