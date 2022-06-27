// Фильтрация уникальных элементов массива
const unique = arr => Array.from(new Set(arr));


// Отфильтруйте анаграммы
const aclean = (arr) => {
    let obj = {};
    for (let i = 0; i < arr.length; i++) {
      let sorted = arr[i].toLowerCase().split("").sort().join("");
      obj[sorted] = arr[i];
    }
    return Object.values(obj);
}
  
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert( aclean(arr) );


// Перебираемые ключи
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());  // map.keys() возвращает итерируемый объект, а не массив. Добавим Arrary.from перед (map.keys()) чтобы превратить его в массив

keys.push("more");

alert(keys); // name, more