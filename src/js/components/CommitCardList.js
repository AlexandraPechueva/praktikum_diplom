export default class CommitCardList {
    constructor(card, container) {
        this.card = card;
        this.container = container;
    }

    create(cards, cardsFromGithub) {
        cards = [];
        cardsFromGithub.forEach(item => {
            cards.push(this.card.createCard(item.commit.committer.name, item.commit.committer.email, item.commit.committer.date,
                item.commit.message, item.author.avatar_url));
        });

        return cards;
    }

    render(cards) {
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
