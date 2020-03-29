export function dateFromNow(dateNow, days) {
    return new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate() - days);
}

export function formatDateToDigitsString(date) {
    return date.toISOString().substring(0, 10);
}

export function formatDateToTextMonth(isoDate) {
    const date = new Date(isoDate);
    return `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${date.getFullYear()}`;
}