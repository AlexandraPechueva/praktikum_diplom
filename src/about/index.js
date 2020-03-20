import '../pages/about.css';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 3.5,
    centeredSlides: true,
    spaceBetween: 16,
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    fadeEffect: {
        crossFade: true
    },
});
