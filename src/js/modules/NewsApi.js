export default class NewsApi {
    constructor(requestData) {
        this.requestData = requestData;
    }

    getNews(requestText, dateFrom, dateTo) {
        const requestString = `${this.requestData.address}q=${requestText}&apiKey=${this.requestData.token}&from=${dateFrom}&to=${dateTo}&pageSize=100`;
        const request = new Request(requestString);

        return fetch(request)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject(res.status);
            })
    }
}
