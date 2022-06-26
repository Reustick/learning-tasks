// Сумма пользовательских чисел
let a = +prompt("Введите первое число", "");
let b = +prompt("Введите второе число", "");

alert(a + b);



// Почему 6.35.toFixed(1) == 6.3?
// необходимо приблизить его к целому числу перед округлением
alert((6.35 * 10).toFixed(20));
// затем округлить
alert(Math.round(6.35 * 10) / 10);



// Ввод числового значения
const readNumber = () => {
    let num;
  
    do {
      num = prompt("Введите число", 0);
    } while ( !isFinite(num) );
  
    if (num === null || num === '') return null;
  
    return +num;
}
  
alert(`Число: ${readNumber()}`);



// Бесконечный цикл по ошибке
let i = 0;
while (i != 10) {
  i += 0.2;
}
// цикл не завершится потому что значение i никогда не станет равным 10


// Случайное число от min до max
const random = (min, max) => {
    return min + Math.random() * (max - min);
}

const getRandomInRange = (min, max,simbolsAfterComma) => {
      return min>=0 && max>=0 && min<max ? ((Math.random() * (max - min + 1) + min).toFixed(simbolsAfterComma)) : alert('Диапазон чисел не может быть отрицательным');
}
getRandomInRange(1,2,3);


// Случайное целое число от min до max
const randomInteger = (min,max) => {
    min=Math.ceil(min);
    max=Math.floor(max);
    return min>=0&&max>=0&&min<max? Math.floor(Math.random()*(max-min+1))+min:alert('Диапазон чисел не может быть отрицательным'); //Максимум и минимум включаются
}
randomInteger(2,5);
