// Сделать первый символ заглавным
const ucFirst = (str) => {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}
  
alert( ucFirst("вася") ); // Вася


// Проверка на спам
const checkSpam = (str) => {
    let lowerStr = str.toLowerCase();
    return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}


// Усечение строки
const truncate = (str, maxlength) => {
    return (str.length > maxlength) ?
      str.slice(0, maxlength - 1) + '…' : str;
}


// Выделить число
const extractCurrencyValue = str => +str.slice(1);