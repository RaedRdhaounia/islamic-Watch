export function formatDate(date) {
  var d = new Date(date);
  const month = '' + (d.getMonth() + 1);
  const day = '' + d.getDate();
  const year = d.getFullYear();

  if (month.length < 2) month = '0' + month;
  if (day.length < 2) day = '0' + day;

  return [year, month, day].join('-');
}

export function DateNowFormat(date) {
  const today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  return [h, m, s].join(':');
}

export function isThisMounth(date) {
  const transfDate = new Date(date);
  const today = new Date(Date.now());
  const ThisMonth = transfDate.getMonth();
  const mounth = today.getMonth();
  return ThisMonth == mounth;
}

export function currentMounth(date) {
    const transfDate = new Date(date);
    return transfDate.getMonth();
}
