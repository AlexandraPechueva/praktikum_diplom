export default class DataStorage {
    save(item, key) {
        const serialItem = JSON.stringify(item);
        localStorage.setItem(key, serialItem);
    }

    getData(key) {
        return JSON.parse(localStorage.getItem(key));
    }
}
