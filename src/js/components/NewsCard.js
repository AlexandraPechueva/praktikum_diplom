import { formatDateToTextMonth } from '../utils/dates';

export default class NewsCard {
    createCard(sourceName, title, publishedDate, description, imageUrl, sourceUrl) {
        const newsCard = document.createElement('div');
        newsCard.classList.add('results-card');

        newsCard.insertAdjacentHTML('beforeend', `
        <a href="" target="_blank" class="results-card__source-url">
            <div class="results-card__photo"></div><a>
        <div class="results-card__content">
            <p class="results-card__date muted-text"></p>
            <h3 class="results-card__title title"></h3>
            <p class="results-card__text"></p>
            <p class="results-card__source muted-text__small"></p>
        </div>`)

        newsCard.querySelector('.results-card__photo').style.backgroundImage = `url(${imageUrl})`
        newsCard.querySelector('.results-card__date').textContent = formatDateToTextMonth(publishedDate);
        newsCard.querySelector('.results-card__title').textContent = title;
        newsCard.querySelector('.results-card__text').textContent = description;
        newsCard.querySelector('.results-card__source').textContent = sourceName;
        newsCard.querySelector('.results-card__source-url').setAttribute('href', sourceUrl);

        return newsCard;
    }
}
