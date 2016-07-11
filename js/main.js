$(document).foundation();

$(document).ready(function() {
  var stickyNavTop = $('.main-header-container').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  
  /***** Sticky Nav *****/  
  if (scrollTop > stickyNavTop) { 
      $('.main-header-container').addClass('sticky');
  } else {
      $('.main-header-container').removeClass('sticky'); 
  }
  };

  stickyNav();
  $(window).scroll(function() {
      stickyNav();
  });
  
  
  /**********************************************
  ADJUST MENU SIZE ON SCROLL
  **********************************************/  
  $(function() {
    $('.main-header-container').data('size','big');
  });

  $(window).scroll(function(){  
      if($(document).scrollTop() > 0)
      {
          if($('.main-header-container').data('size') == 'big')
          {
            $('.main-header-container').data('size','small');
            $('.main-header-container').stop().animate({
                height:'60px'},300);
            $('.main-logo').stop().animate({width: '120px', marginLeft:'120px'}, {duration:300, queue: false});
            $('.main-logo').css('margin-top', '-10px');
            $('.menu').css('margin-top', '-40px');
          }
      }
      else
      {
          if($('.main-header-container').data('size') == 'small')
          {
            $('.main-header-container').data('size','big');
            $('.main-header-container').stop().animate({
                height:'130px'},300);
            $('.main-logo').stop().animate({width: '250px', marginLeft:'0px'}, {duration:300, queue: false});
            $('.main-logo').css('margin-top', '0px');
            $('.menu').css('margin-top', '0px');
          }  
      }
  });
  
  
  
  $('.single-item').on('init', function(e, slick) {
        var $firstAnimatingElements = $('div.slide:first-child').find('[data-animation]');
        doAnimations($firstAnimatingElements);    
    });
    $('.single-item').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
        var $animatingElements = $('div.slide[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
        doAnimations($animatingElements);    
    });
  
  $(".single-item").slick({
        dots: true,
        autoplay: true,
        arrows: true,
        autoplaySpeed: 4000,
        fade: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1
  });
      
  $('.center').slick({
    dots: false,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 3,
    autoplay: false,
    responsive: [
      {
        breakpoint: 1099,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
  
  $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        fade: true,
        asNavFor: '.slider-nav',
        adaptiveHeight: true,
        speed: 300
      });
      $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: false,
        focusOnSelect: true
      });
  
  $('.trigger').on('click', function() {
	$(this).toggleClass('on');
    $('.mobile-menu').fadeToggle(200);
  });
  
  function doAnimations(elements) {
        var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
        elements.each(function() {
            var $this = $(this);
            var $animationDelay = $this.data('delay');
            var $animationType = 'animated ' + $this.data('animation');
            $this.css({
                'animation-delay': $animationDelay,
                '-webkit-animation-delay': $animationDelay
            });
            $this.addClass($animationType).one(animationEndEvents, function() {
                $this.removeClass($animationType);
            });
        });
    }
  
  
  
  
});
