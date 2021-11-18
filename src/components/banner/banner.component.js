import './banner.component.scss'

import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

Swiper.use([Navigation]);

const awards = document.querySelectorAll('.award')
awards.forEach((root) => {
  const swiperElement = root.querySelector('.swiper')
  new Swiper(swiperElement, {
    slidesPerView: 4,
    spaceBetween: 10,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});