import './header.component.scss'

const modileMenu = document.querySelector(".menu-list");
const burgerButton = document.querySelector(".burger-button");
const addressInHeader = document.querySelector(".address-section");
const rootBlock = document.querySelector(".root");
const headerSection = document.querySelector(".header");
let lastScrollTop = 0;

window.onload = () => {
  //headerSection.classList.remove("fixed-header");
  modileMenu.classList.add("mobile-menu-hide");
  addressInHeader.classList.toggle("mobile-address-show");
  rootBlock.classList.toggle("root-hide-menu"); 
};

window.addEventListener("scroll", () => {
  const st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    headerSection.classList.add("fixed-header");
    addressInHeader.classList.remove("mobile-address-show");
    addressInHeader.classList.add("mobile-address-hide");
    modileMenu.classList.remove("m-t-104-mobile");
  } else {
    addressInHeader.classList.add("mobile-address-show");
    addressInHeader.classList.remove("mobile-address-hide");
    modileMenu.classList.add("m-t-104-mobile");
  }
  lastScrollTop = st;
}, false);

burgerButton.addEventListener("click", (evt) => {
  burgerButton.classList.toggle("burger-button-open");
  modileMenu.classList.toggle("mobile-menu-show");
  modileMenu.classList.toggle("mobile-menu-hide");
  rootBlock.classList.toggle("root-show-menu");
  rootBlock.classList.toggle("root-hide-menu");
});

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (modileMenu.classList.contains("mobile-menu-show")) {
      evt.preventDefault();
      modileMenu.classList.remove("mobile-menu-show");
    }
  }
});