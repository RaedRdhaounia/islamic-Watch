export   const DateNow = () => {
    var date = new Date();
    var day = date.getDate();
    var mounth = date.getMonth() + 1;
    var year = date.getFullYear();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    return `${year}/${mounth}/${day} || ${hour}:${minute}:${second}`;
  };