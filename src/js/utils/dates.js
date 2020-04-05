export function dateFromNow(dateNow, days) {
    const dateCopy = new Date(dateNow);

    return new Date(dateCopy.setDate(dateCopy.getDate() - days));
}

export function formatDateToDigitsString(date) {
    return date.toISOString().substring(0, 10);
}

export function formatDateToTextMonth(isoDate) {
    const date = new Date(isoDate);
    return `${date.toLocaleString('ru', { month: 'long', day: 'numeric' })}, ${date.getFullYear()}`;
}

function getWeekDay(dayNumber) {
    switch (dayNumber) {
        case 1: return 'пн'
        case 2: return 'вт'
        case 3: return 'ср'
        case 4: return 'чт'
        case 5: return 'пт'
        case 6: return 'сб'
        case 0: return 'вс'
    }
}

export function formatDateToDay(isoDate) {
    const date = new Date(isoDate);

    return `${date.getDate()}, ${getWeekDay(date.getDay())}`;
}
