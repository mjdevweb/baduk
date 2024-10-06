$(window).scroll(function(){
  if( $(document).scrollTop() > 0 ){
      $('header').addClass('active');
  }else{
      $('header').removeClass('active')
  };
});

$(function(){
  // GNB
  $( '.header-nav > li > span' ).each(function() {
    $(this).mouseenter(function () {
      $(this).addClass('gnb-active');
      $(this).parent().addClass('gnb-active');
    });
    $('.header-nav li').mouseleave(function () {
      //alert(11);
        $('.header-nav > li > span').removeClass('gnb-active');
        $(this).removeClass('gnb-active');
      });
  });

  // visual
  var swiper = new Swiper(".main-visual-sec .swiper-container", {
    loop : true,
    speed:1000,
    loopAdditionalSlides : 1,
    fadeEffect: {
    crossFade: true
    },
    navigation: {
      nextEl: ".main-visual-sec .button-next",
      prevEl: ".main-visual-sec .button-prev",
    },    
    pagination: {
      el: ".main-visual-sec .swiper-pagination",
      clickable: true
    },
  });

  //FAQ
	$('.faq-a').hide();
	$('.folder-list > li > .faq-q').on('click', function(e) {
		e.preventDefault();
		if ($(this).parent('li').hasClass('open')) {
			$(this).parent('li').removeClass('open').addClass('close');
			$(this).next('.faq-a').hide();
		} else {
			$(this).parent('li').removeClass('close').addClass('open');
			$(this).siblings('.folder-list > li > .faq-q').removeClass('open').addClass('close');
			$(this).siblings('.faq-a').hide();
			$(this).next('.faq-a').show();
		}
	});
  
  // 마이페이지 >  본인확인(비밀번호입력)
  $('.bx-password button').click(function () {
    var x = document.getElementById("password-bx");
    $(this).toggleClass('show');
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }    
  });

  // 팝업
  
	// 팝업CLOSE
	$('.popclose').click(function (e) {
		$('.popup-wrap').removeClass('show');
		$('.popup-wrap').hide();
		$('body').removeClass('scroll-hidden').off('scroll touchmove mousewheel');
	});
  

});
