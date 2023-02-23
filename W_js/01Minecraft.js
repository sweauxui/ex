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
  breakpoints: {
    1199: {
      slidesPerView: 2.5,
      spaceBetween: 90,
    },
  },
  899: {
    slidesPerView: 2.5,
    spaceBetween: 150,
  },
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
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  $('.Languages').click(function(){
    if(!$('.gloval').hasClass('on')){ //만약 글로벌이 온을 가지고 있지 않으면
      $('.gloval').addClass('on')//온을 추가해라
    }
    else{
      $('.gloval').removeClass('on') //가지고 있으면 온을 제거해라
    }
  })

  // $('.Languages').click(function(){
  //   if(!$('.gloval').hasClass('on')){ //만약 글로벌이 온을 가지고 있지 않으면
  //     $('.gloval').addClass('on')//온을 추가해라
  //   }
  //   else{
  //     $('.gloval').removeClass('on') //가지고 있으면 온을 제거해라
  //   }
  // }) 연습

  
  // $('.hamburger').click(function(){
  //   $('.gnb').addClass('on');
  // })

  $('.hamburger').click(function(){
    if(!$('.gnb').hasClass('on')){
      $('.gnb').addClass('on')
    }
    else{
      $('.gnb').removeClass('on')
    }

    if(!$('.login_start').hasClass('on')){
      $('.login_start').addClass('on')
    }
    else{
      $('.login_start').removeClass('on')
    }
     $(this).toggleClass('on')
  })


// .attr