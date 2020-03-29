import './pages/index.css';
import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import { dateFromNow, formatDateToDigitsString } from './js/utils/dates';

const searchInput = new SearchInput(searchHandler);
const requestText = document.querySelector('.search__input');
const requestNewsApiData = {
    address: 'https://newsapi.org/v2/everything?',
    token: '24dc55a83df54dfeb22d95136901e62f'
}

const now = new Date();

let cards = [];
const newsCard = new NewsCard();

const newsCardsContainer = document.querySelector('.results__cards');
const newsCardList = new NewsCardList(newsCard, newsCardsContainer);
const results = document.querySelector('.results');
let newsCards = [];
const searchButton = document.querySelector('.search__button');
const showMoreButton = document.querySelector('.results__button');
const notFound = document.querySelector('.not-found');
const preloader = document.querySelector('.preloader');
const listHeader = document.querySelector('.list-header');
const resultsWrapper = document.querySelector('.results__cards-wrapper');
const requestError = document.querySelector('.request-error');
const searchForm = document.forms.search__form;
const inputField = document.querySelector('.search__input');
const searchError = document.querySelector('.search__error');

function hideBlock(block) {
    block.classList.add('hidden');
}

function showBlock(block) {
    block.classList.remove('hidden');
}

function hideResultsElements() {
    hideBlock(listHeader);
    hideBlock(showMoreButton);
    hideBlock(resultsWrapper);
}

function changeSearchFormState() {
    inputField.toggleAttribute('disabled');
    searchButton.toggleAttribute('disabled');
}

hideResultsElements();

function searchHandler(event) {
    event.preventDefault();

    const isValid = searchInput.checkValidity(inputField, event);
    /* взаимодействие с API, списком карточек и локальным браузерным хранилищем */
    const newsApi = new NewsApi(requestNewsApiData);

    hideBlock(requestError);

    if (isValid) {
        hideResultsElements();
        hideBlock(notFound);
        showBlock(results);
        showBlock(preloader);

        changeSearchFormState();

        setTimeout(() =>
            newsApi.getNews(requestText.value, formatDateToDigitsString(now), formatDateToDigitsString(dateFromNow(now, 7)))
                .then(result => {
                    console.log(result)
                    console.log(result.articles);

                    if (result.articles.length == 0) {
                        hideResultsElements();
                        showBlock(notFound);
                        hideBlock(preloader);
                    }
                    else {
                        if (newsCards.length != 0) {
                            newsCards = [];
                            newsCardList.removeCards();
                        };

                        showBlock(listHeader);
                        showBlock(showMoreButton);
                        showBlock(resultsWrapper);

                        newsCardList.render(cards, result.articles.slice(0, 3));
                        hideBlock(preloader);

                        changeSearchFormState();

                        newsCards = result.articles.slice();
                    }
                })
                .catch(err => {
                    console.log('Ошибка. Запрос не выполнен', err);
                    showBlock(requestError);
                    hideBlock(preloader);

                    changeSearchFormState();
                }), 1000);
    }

    else {
        showBlock(searchError);
        setTimeout(() => hideBlock(searchError), 3000);
    }
}
function showHandler(event) {
    newsCards.splice(0, 3);
    newsCardList.render(cards, newsCards.slice(0, 3));

    console.log(newsCards.length)
    if (newsCards.length <= 3) showMoreButton.style.display = 'none';
}

searchInput.setEventListeners(searchForm);
showMoreButton.addEventListener('click', showHandler);
