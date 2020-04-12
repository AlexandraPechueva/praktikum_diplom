export default class CommitCardList {
    constructor(card, container) {
        this._card = card;
        this._container = container;
    }

    create(cards, cardsFromGithub) {
        cards = [];
        cardsFromGithub.forEach(item => {
            cards.push(this._card.createCard(item.commit.committer.name, item.commit.committer.email, item.commit.committer.date,
                item.commit.message, item.author.avatar_url));
        });

        return cards;
    }
}
