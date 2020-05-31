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

const consultBtns = document.querySelectorAll('[data-target="consultation"]');
const orderBtns = document.querySelectorAll('[data-target = "order"]');
const overlay = document.querySelector('.overlay');
const modals = document.querySelectorAll('.modal');
const modalConsult = document.querySelector('.modal_consultation');
const modalOrder = document.querySelector('.modal_order');
const close = document.querySelectorAll('.modal__close');
const orderTitle = document.querySelector('.modal_order .modal__subtitle');
const up = document.querySelector('.up');
const review = document.querySelectorAll('.review');

function closeModal() {
  overlay.classList.remove('overlay_open');
  modals.forEach(el => {
    el.classList.remove('modal_open');
  });
}

function openModal(targetModal) {
  overlay.classList.add('overlay_open');
  targetModal.classList.add('modal_open');
}

document.addEventListener('keydown', function (event) {
  event.code === 'Escape' && closeModal();
});

close.forEach(elem => {
  elem.addEventListener('click', closeModal);
});

consultBtns.forEach(btn => {
  btn.addEventListener('click', openModal.bind(null, modalConsult));
});

orderBtns.forEach(btn => {
  btn.addEventListener('click', function () {
    openModal(modalOrder);
    const currentOrder = btn.closest('.product')
      .querySelector('.product__title').textContent;
    orderTitle.textContent = currentOrder;
  });
});

up.addEventListener('click', function () {
  const interval = setInterval(() => {
    if (document.documentElement.scrollTop > 0) {
      document.documentElement.scrollTop = window.pageYOffset - 20;
    } else {
      clearInterval(interval);
    }
  }, 5);
});


document.addEventListener('scroll', function (e) {
  window.pageYOffset > 1000
    ? up.classList.add('up_show')
    : up.classList.remove('up_show');
  review.forEach(el => {
    if (window.pageYOffset + el.parentElement.clientHeight  > el.offsetTop) {
      el.classList.add('animate__zoomIn');
    } else {
      el.classList.remove('animate__zoomIn');
    }
  });
});
