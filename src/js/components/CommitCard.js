import { formatDateToTextMonth } from '../utils/dates';

export default class CommitCard {
    createCard(committerName, committerEmail, comitterDate, commitMessage, authorAvatar) {
        const commitCard = document.createElement('div');
        commitCard.classList.add('commit-card');

        commitCard.insertAdjacentHTML('beforeend', `
        <div class="commit-card__content">
            <p class="commit-card__date muted-text"></p>
            <div class="commit-card__person">
                <div class="commit-card__photo"></div>
                <div class="commit-card__contacts">
                    <h3 class="commit-card__name title"></h3>
                    <h4 class="commit-card__email"></h4>
                </div>
            </div>

            <p class="commit-card__text"></p>
        </div>`)

        commitCard.querySelector('.commit-card__date').textContent = formatDateToTextMonth(comitterDate);
        commitCard.querySelector('.commit-card__photo').style.backgroundImage = `url(${authorAvatar})`
        commitCard.querySelector('.commit-card__name').textContent = committerName;
        commitCard.querySelector('.commit-card__email').textContent = committerEmail;
        commitCard.querySelector('.commit-card__text').textContent = commitMessage;

        return commitCard;

    }
}
