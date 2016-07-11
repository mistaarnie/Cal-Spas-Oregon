$(document).foundation();

$(document).ready(function() {
  var stickyNavTop = $('.menu-container').offset().top;

  var stickyNav = function(){
  var scrollTop = $(window).scrollTop();

  if (scrollTop > stickyNavTop) { 
      $('.menu-container').addClass('sticky');
  } else {
      $('.menu-container').removeClass('sticky'); 
  }
  };

  stickyNav();
  $(window).scroll(function() {
      stickyNav();
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
