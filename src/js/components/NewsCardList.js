export default class NewsCardList {
    constructor(card, container) {
        this.card = card;
        this.container = container;
    }

    render(cards, cardsFromApi) {
        cards = [];
        cardsFromApi.forEach(item => {
            cards.push(this.card.createCard(item.source.name, item.title, item.publishedAt, item.description, item.urlToImage));
        });

        cards.forEach(card => this.addCard(card));
    }

    addCard(card) {
        this.container.appendChild(card);

    }

    removeCards() {
        while (this.container.hasChildNodes()) {
            this.container.removeChild(this.container.lastChild);
        }
    }
}
