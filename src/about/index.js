import '../pages/about.css';
import Swiper from 'swiper';
import GithubApi from '../js/modules/GithubApi';
import CommitCard from '../js/components/CommitCard';
import CommitCardList from '../js/components/CommitCardList';
import { GITHUB_API_URL } from '../js/constatnts/github-api-url'

const commitsSwiper = new Swiper('.swiper-container', {
    centeredSlides: true,
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    initialSlide: 2,
    loopedSlides: 100,
    loopAdditionalSlides: 100,

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

const githubApi = new GithubApi(GITHUB_API_URL);

const cards = [];
const commitCard = new CommitCard();

const commitCardsContainer = document.querySelector('.swiper-wrapper');
const commitCardList = new CommitCardList(commitCard, commitCardsContainer);

githubApi.getCommits('AlexandraPechueva', 'praktikum_diplom')
    .then(result => {
        console.log(result);

        const commitCards = commitCardList.create(cards, result);
        commitCards.forEach(card => {
            const commitSlides = [];
            const slide = document.createElement('div');
            slide.classList.add('swiper-slide');
            slide.appendChild(card);
            commitSlides.push(slide);
            commitsSwiper.appendSlide(commitSlides);
            commitsSwiper.init();
        });
    });
