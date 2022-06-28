// Скопирован ли массив?
let fruits = ["Яблоки", "Груша", "Апельсин"];

// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");

// что в fruits?
alert( fruits.length ); // ?  выведет 4 массив скопирован



// Операции с массивами
let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert( styles.shift() );
styles.unshift("Рэп", "Регги");



// Вызов в контексте массива
let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ? выведет a,b,function(){alert(this);}


// Сумма введённых чисел
const sumInput = () => {
    let numbers = [];
    while (true) {
      let value = prompt("Введите число", 0);
      if (value === "" || value === null || !isFinite(value)) break;
      numbers.push(+value);
    }
    let sum = 0;
    for (let number of numbers) {
      sum += number;
    }
    return sum;
}


// Подмассив наибольшей суммы
const getMaxSubSum = (arr) => {
    let maxSum = 0;
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
    return maxSum;
}