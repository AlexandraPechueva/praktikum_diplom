import './pages/index.css';
import SearchInput from './js/components/SearchInput';
import NewsApi from './js/modules/NewsApi';
import NewsCard from './js/components/NewsCard';
import NewsCardList from './js/components/NewsCardList';
import DataStorage from './js/modules/DataStorage';
import { dateFromNow, formatDateToDigitsString } from './js/utils/dates';
import { NEWS_API_ACCESS_DATA } from './js/constatnts/news-api-access-data'

const searchInput = new SearchInput(searchHandler);

const requestText = document.querySelector('.search__input');
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

const dataStorage = new DataStorage();

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
    const newsApi = new NewsApi(NEWS_API_ACCESS_DATA);

    hideBlock(requestError);

    if (isValid) {
        hideResultsElements();
        hideBlock(notFound);
        showBlock(results);
        showBlock(preloader);

        changeSearchFormState();

        setTimeout(() =>
            newsApi.getNews(requestText.value, formatDateToDigitsString(now), formatDateToDigitsString(dateFromNow(now, 6)))
                .then(result => {
                    if (result.articles.length == 0) {
                        hideResultsElements();
                        showBlock(notFound);
                        hideBlock(preloader);
                        changeSearchFormState();
                    }
                    else {
                        if (newsCards.length != 0) {
                            newsCards = [];
                            newsCardList.removeCards();
                        };

                        dataStorage.save(result, "key")
                        dataStorage.save(requestText.value, "word");

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

    if (newsCards.length <= 3) showMoreButton.style.display = 'none';
}

searchInput.setEventListeners(searchForm);
showMoreButton.addEventListener('click', showHandler);
