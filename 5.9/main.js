// Сумма свойств объекта
const sumSalaries = salaries => Object.values(salaries).reduce((a, b) => a + b, 0);



// Подсчёт количества свойств объекта
const count = obj => Object.keys(obj).length;