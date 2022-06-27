// Независимы ли счётчики?
// function makeCounter() {
//     let count = 0;
  
//     return function() {
//       return count++;
//     };
//   }
  
// let counter = makeCounter();
// let counter2 = makeCounter();

// alert( counter() ); // 0
// alert( counter() ); // 1

// alert( counter2() ); // 0  функции counter и counter2 созданы разными вызовами makeCounter
// alert( counter2() ); // 1



// Объект счётчика
function Counter() {
    let count = 0;
  
    this.up = function() {
      return ++count;
    };
    this.down = function() {
      return --count;
    };
}
  
let counter = new Counter();
  
alert( counter.up() ); // 1
alert( counter.up() ); // 2
alert( counter.down() ); // 1   все будет работать никаких проблем нет



// Функция в if
let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi(); // будет ошибка так как функция находится внутри блока if


// Сумма с помощью замыканий
function sum(a) {
    return function(b) {
      return a + b; // берёт "a" из внешнего лексического окружения
    };
}



// Фильтрация с помощью функции
function inBetween(a, b) {
    return function(x) {
      return x >= a && x <= b;
    };
}
  
let arr = [1, 2, 3, 4, 5, 6, 7];
alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6


function inArray(arr) {
    return function(x) {
      return arr.includes(x);
    };
}
let arr1 = [1, 2, 3, 4, 5, 6, 7];
alert( arr1.filter(inArray([1, 2, 10])) ); // 1,2


// Сортировать по полю
const byField = field => (a, b) => a[field] > b[field] ? 1 : -1;


// Армия функций
function makeArmy() {
    let shooters = [];
  
    let i = 0;
    for(let i = 0; i < 10; i++) {             // вместо цикла while сделать for
      let shooter = function() { // функция shooter
        alert( i ); // должна выводить порядковый номер
      };
      shooters.push(shooter);
      i++;
    }
  
    return shooters;
}
  
let army = makeArmy();
  
army[0](); // у 0-го стрелка будет номер 10
army[5](); // и у 5-го стрелка тоже будет номер 10
// ... у всех стрелков будет номер 10, вместо 0, 1, 2, 3...