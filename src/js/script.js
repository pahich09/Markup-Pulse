const slider = tns({
  container: '.carousel__inner',
  slideBy: 1,
  controls: false,
  nav: false,
  speed: 1000,
  navPosition: 'bottom',
  rewind: true,
  responsive: {
    320: {
      nav: true,
    },
    768: {
      nav: false
    },
  }
});
document.querySelector('.carousel__prev-btn')
  .addEventListener('click', function () {
    slider.goTo('prev');
  });
document.querySelector('.carousel__next-btn')
  .addEventListener('click', function () {
    slider.goTo('next');
  });
