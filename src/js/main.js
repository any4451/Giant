////// slider screenshots

var slider = $(".slider").waterwheelCarousel({
        flankingItems: 7,
    });

    $('.prev').on('click',function () {
        slider.prev();
        return false
    });

      $('.next').on('click',function () {
        slider.next();
        return false;
    });

/////// slider reviews

  $('.review-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow:  '.slider-btn.prev',
    nextArrow: '.slider-btn.next',
    responsive: [
        {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
    ],
  });

/////// burger menu 

const burger = document.querySelector('.burger');
const body = document.querySelector('body');
const menu = document.querySelector('.menu');

burger.addEventListener('click', function () {

    burger.classList.remove('burger--active');
    
    if(!menu.classList.contains('menu--active')) {
        menu.classList.add('menu--active');
        body.classList.add('overflow');
        burger.classList.add('burger--active');
    } else {
        menu.classList.remove('menu--active');
        body.classList.remove('overflow');
    } 
});

menu.addEventListener('click', function () {
    burger.classList.remove('burger--active');
    menu.classList.remove('menu--active');
    body.classList.remove('overflow');
});


