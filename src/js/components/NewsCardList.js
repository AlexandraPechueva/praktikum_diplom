export default class NewsCardList {
    constructor(card, container) {
        this._card = card;
        this._container = container;
    }

    render(cards, cardsFromApi) {
        cards = [];
        cardsFromApi.forEach(item => {
            cards.push(this._card.createCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage));
        });

        this._addCards(cards);
    }

    _addCards(cards) {
        let fragment = document.createDocumentFragment();
        cards.forEach((card) => {
            fragment.appendChild(card);
        });

        this._container.appendChild(fragment);
    }

    removeCards() {
        while (this._container.hasChildNodes()) {
            this._container.removeChild(this._container.lastChild);
        }
    }
}
