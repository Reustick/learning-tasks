let user = {};
user.name = "John";
user.surname = "Smith";
user.name = "Pete";
delete user.name;
// Привет, object



function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
}
// Проверка на пустоту



const user = {
    name: "John"
};
// это будет работать? Да будет здесь находится ссылка на объект, содержимое объекта можно менять
user.name = "Pete";
// Объекты-константы?



let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  };
  
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  
  alert(sum); // 390
// Сумма свойств объекта


function multiplyNumeric(obj) {
    for (let key in obj) {
      if (typeof obj[key] == 'number') {
        obj[key] *= 2;
      }
    }
}
// Умножаем все числовые свойства на 2