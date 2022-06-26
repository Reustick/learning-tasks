// Создайте дату
let someDate = new Date(2012, 1, 20, 3, 12);
alert( someDate );


// Покажите день недели
const getWeekDay = (date) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}
  
let date = new Date(2014, 0, 3);
alert( getWeekDay(date) );


// День недели в европейской нумерации
const getLocalDay = (date) => {
    let day = date.getDay();
    if (day == 0) {
      day = 7;
    }
    return day;
}


// Какой день месяца был много дней назад?
function getDateAgo(date1, days) {
    let dateCopy = new Date(date);
    dateCopy.setDate(date1.getDate() - days);
    return dateCopy.getDate();
}
let date1 = new Date(2015, 0, 2);



// Последнее число месяца?
const getLastDayOfMonth = (year, month) => {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}


// Сколько сегодня прошло секунд?
const getSecondsToday = () =>{
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}


//Сколько секунд осталось до завтра?
const getSecondsToTomorrow = () => {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
    let diff = tomorrow - now;
    return Math.round(diff / 1000);
}


// Форматирование относительной даты
const formatDate = (date) => {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}