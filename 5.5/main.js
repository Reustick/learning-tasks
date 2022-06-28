// Переведите текст вида border-left-width в borderLeftWidth
const camelize = str => str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');



// Фильтрация по диапазону
function filterRange(arr, a, b) {
    return arr.filter(item => (a <= item && item <= b));
}
  
let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
alert( filtered ); 
alert( arr );



// Фильтрация по диапазону "на месте"
const filterRangeInPlace = (arr, a, b) => {
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
}


// Сортировать в порядке по убыванию
const solution = arr => arr.sort((a, b) => b - a);



// Скопировать и отсортировать массив
const copySorted = someArr => arr.slice().sort();
  
let someArr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(someArr);
alert( sorted );
alert( someArr );


// Создать расширяемый калькулятор
function Calculator() {
    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
    this.calculate = function(str) {
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2]
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
      return this.methods[op](a, b);
    }
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
}


// Трансформировать в массив имён
// let vasya = { name: "Вася", age: 25 };  ЗАКОМЕНТИЛ ЧТОБЫ НЕ БЫЛО КОНФЛИКТОВ
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };

// let users = [ vasya, petya, masha ];

// let names = users.map(item => item.name);

// alert( names ); // Вася, Петя, Маша


// Трансформировать в объекты
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [ vasya, petya, masha ];

let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));

/*
usersMapped = [
  { fullName: "Вася Пупкин", id: 1 },
  { fullName: "Петя Иванов", id: 2 },
  { fullName: "Маша Петрова", id: 3 }
]
*/

alert( usersMapped[0].id ); // 1
alert( usersMapped[0].fullName ); // Вася Пупкин


// Отсортировать пользователей по возрасту
const sortByAge = arr => arr.sort((a, b) => a.age > b.age ? 1 : -1);


// Перемешайте массив
const shuffle = array => array.sort(() => Math.random() - 0.5);  // простое решение

function shuffle(arr){   // тасование фишера — йетса
	var j, temp;
	for(var i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}



// Получить средний возраст
const getAverageAge = (users) => {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}


// Оставить уникальные элементы массива
const unique = (arr) => {
    let result = [];
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
    return result;
}