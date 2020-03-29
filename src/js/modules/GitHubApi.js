export default class GithubApi {
    constructor(requestUrl) {
        this.requestUrl = requestUrl;
    }

    getCommits(owner, repo) {
        const requestString = `${this.requestUrl}${owner}/${repo}/commits`;

        return fetch(requestString)
            .then(res => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(res.status);
            })

            .catch(err => console.log('Ошибка. Запрос не выполнен', err));
    }
}
