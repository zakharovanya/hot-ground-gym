import './header.component.scss'

const modileMenu = document.querySelector('.menu-list');
const burgerButton = document.querySelector('.burger-button');
const addressInHeader = document.querySelector('.address-section');
const rootBlock = document.querySelector('.root');
let lastScrollTop = 0;

window.onload = () => {
  modileMenu.classList.add('mobile-menu-hide');
  addressInHeader.classList.toggle('address-show');
  rootBlock.classList.toggle('root-hide-menu');
};

window.addEventListener('scroll', () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    addressInHeader.classList.remove('address-show');
    addressInHeader.classList.add('address-hide');
    modileMenu.classList.remove('m-t-104-mobile');
  } else {
    addressInHeader.classList.add('address-show');
    addressInHeader.classList.remove('address-hide');
    modileMenu.classList.add('m-t-104-mobile');
  }
  lastScrollTop = st;
}, false);

burgerButton.addEventListener('click', () => {
  burgerButton.classList.toggle('burger-button-open');
  modileMenu.classList.toggle('mobile-menu-show');
  modileMenu.classList.toggle('mobile-menu-hide');
  rootBlock.classList.toggle('root-show-menu');
  rootBlock.classList.toggle('root-hide-menu');
});

window.addEventListener('keydown', (evt) => {
  if (evt.keyCode === 27) {
    if (modileMenu.classList.contains('mobile-menu-show')) {
      evt.preventDefault();
      modileMenu.classList.remove('mobile-menu-show');
    }
  }
});