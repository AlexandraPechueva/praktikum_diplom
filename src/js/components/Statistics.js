import { formatDateToDay, dateFromNow } from '../utils/dates';

export default class Statistics {
    constructor(searchedResult, searchedText) {
        this._searchedResult = searchedResult;
        this._searchedText = searchedText;
    }

    getAmountByDays() {
        const pattern = new RegExp('\\b' + this._searchedText + '\|\(\\s|\\/|\\\\|\"|\'|\«|\,|\:)' + this._searchedText + '\|\^' + this._searchedText, 'g');
        const now = new Date();
        const dates = this._getDates(now, 6);

        const counter = dates.sort().map(item => {
            return {
                'date': item,
                'titleAmount': 0,
                'descrAmount': 0,
            }
        })

        this._searchedResult.articles.map(item => {
            return {
                date: item.publishedAt,
                title: item.title != null ? item.title.toLowerCase() : item.title,
                description: item.description != null ? item.description.toLowerCase() : item.description,
            }
        })
            .filter(item => (item.title != null && item.description != null))
            .filter(item => item.title.includes(this._searchedText) || item.description.includes(this._searchedText))
            .forEach(item => {
                counter.forEach((day, i) => {
                    if (item.date.substring(0, 10) == day.date) {
                        if (item.title != null) {
                            counter[i].titleAmount += (item.title.match(pattern) || []).length;
                        }

                        if (item.description != null) {
                            counter[i].descrAmount += (item.description.match(pattern) || []).length;
                        }
                    }
                })
            });

        return counter;
    }

    _getDates(now, days) {
        const dates = [];
        dates.push(now.toISOString().substring(0, 10));

        for (let i = 1; i <= days; i++) {
            const prevDay = dateFromNow(now, i).toISOString().substring(0, 10);
            dates.push(prevDay);
        }

        return dates;
    }

    getTotalTitleAmount(counter) {
        return counter.reduce((sum, current) => {
            return sum + current.titleAmount;
        }, 0);
    }

    getBars(counter, bars) {
        let totalAmountByDay = 0;
        bars.forEach((item, i) => {
            if (counter[i] != null) {
                totalAmountByDay = counter[i].titleAmount + counter[i].descrAmount;
            }

            item.style.width = totalAmountByDay + '%';
            item.textContent = totalAmountByDay;
        });
    }

    getDays(counter, days) {
        days.forEach((item, i) => {
            if (counter[i] != null) {
                item.textContent = formatDateToDay(counter[i].date);
            }
        });
    }
}
