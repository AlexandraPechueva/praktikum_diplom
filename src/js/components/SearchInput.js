export default class SearchInput {
    constructor(searchHandler) {
        this._searchHandler = searchHandler;
    }

    checkValidity(input, event) {
        if (input.validity.valueMissing) {
            return false;
        }
        return true;
    }

    setEventListeners(form) {
        form.addEventListener('submit', this._searchHandler);
    }
}