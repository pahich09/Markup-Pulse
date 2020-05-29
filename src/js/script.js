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


const links = document.querySelectorAll('.product__link');
links.forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const parent = e.target.closest('.product__wrap');
    parent.querySelector('.product__front').classList.toggle('product__front_active');
    parent.querySelector('.product__back').classList.toggle('product__back_active');
  });
});


const tabs = document.querySelectorAll('.catalog__tabs-item');
tabs.forEach(tab => {
  tab.addEventListener('click', function () {
    tabs.forEach(el => {
      el.classList.remove('catalog__tabs-item_active');
    });
    this.classList.add('catalog__tabs-item_active');
    document.querySelectorAll('.catalog__content').forEach(item => {
      item.classList.remove('catalog__content_active');
    });
    document.getElementById(this.dataset.type).classList.add('catalog__content_active');
  });
});
