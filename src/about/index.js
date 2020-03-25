import '../pages/about.css';
import Swiper from 'swiper';

var mySwiper = new Swiper('.swiper-container', {
    centeredSlides: true,
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
    breakpoints: {
        1280: {
            slidesPerView: 4,
            spaceBetween: 16,
        },

        960: {
            slidesPerView: 3.2,
            spaceBetween: 16,
        },

        580: {
            slidesPerView: 2.2,
            spaceBetween: 8,
        },

        425: {
            slidesPerView: 1.2,
            spaceBetween: 8,
        }
    }
});
