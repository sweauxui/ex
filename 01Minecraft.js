var swiper1 = new Swiper(".gamecard", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  keyboard: true,
  autoplay: {
    delay: 3200,
    disableOnInteraction: false
  },
});

var swiper2 = new Swiper(".News", {
  slidesPerView: 2.5,
  spaceBetween: 40,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

  var swiper3 = new Swiper(".pickcard", {
    spaceBetween: 40,
    centeredSlides: true,
    loop: true,
    // navigation: {
    //   nextEl: ".swiper-button-next",
    //   prevEl: ".swiper-button-prev",
    // },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
