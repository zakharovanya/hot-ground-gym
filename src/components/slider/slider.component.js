import './slider.component.scss'

import Swiper, { Navigation } from 'swiper';
import 'swiper/css';

Swiper.use([Navigation]);

const sliders = document.querySelectorAll('.slider')
sliders.forEach((root) => {
  const swiperElement = root.querySelector('.swiper')
  new Swiper(swiperElement, {
    slidesPerView: 1,
    spaceBetween: 10,
    centeredSlides: false,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    breakpoints: {
      640: {
        slidesPerView: 1,
        slidesPerGroup: 1,
      },
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});