$(window).scroll(function(){
  if( $(document).scrollTop() > 0 ){
      $('header').addClass('active');
  }else{
      $('header').removeClass('active')
  };
});
$(function(){
  // visual
  var swiper = new Swiper(".main-visual-sec .swiper-container", {
    loop : true,
    speed:1000,
    loopAdditionalSlides : 1,
    fadeEffect: {
    crossFade: true
    },
    pagination: {
    el: ".main-visual-sec .swiper-pagination",
    clickable: true
    },
  });  
});
