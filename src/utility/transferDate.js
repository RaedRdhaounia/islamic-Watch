export function formatDate(date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
}

export function DateNowFormat(date) {
    const today = new Date()
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    return [h, m, s].join(':');
}