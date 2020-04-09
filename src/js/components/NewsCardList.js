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

        cards.forEach(card => this._addCard(card));
    }

    _addCard(card) {
        this._container.appendChild(card);

    }

    removeCards() {
        while (this._container.hasChildNodes()) {
            this._container.removeChild(this._container.lastChild);
        }
    }
}
