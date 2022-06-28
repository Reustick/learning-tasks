// Вычислить сумму чисел до данного
const sumTo = (n) => {
    let sum = 0;
    for (let i = 1; i <= n; i++) {   // с помощью цикла
      sum += i;
    }
    return sum;
}

const sumToRec = (n) => {
    if (n == 1) return 1;
    return n + sumToRec(n - 1);     // рекурсия
}

const sumToForm = (n) => {
    return n * (n + 1) / 2;        // арифметическая прогрессия
}



// Вычислить факториал
const factorial = (n) => {
    return (n != 1) ? n * factorial(n - 1) : 1;
}



// Числа Фибоначчи
const fib = (n) => {
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
      let c = a + b;
      a = b;
      b = c;
    }
    return b;
}


// Вывод односвязного списка
let list = {
    value: 1,
    next: {
      value: 2,
      next: {
        value: 3,
        next: {
          value: 4,
          next: null
        }
      }
    }
};
  
const printList = (list) => {   // через цикл 
    let tmp = list;
    while (tmp) {
      alert(tmp.value);
      tmp = tmp.next;
    }
}

function printList(list) {   // с помощью рекурсии
    alert(list.value);
    if (list.next) {
      printList(list.next);
    }
}



// Вывод односвязного списка в обратном порядке
const printReverseList = (list) => {        // через рекурсию
    if (list.next) {
      printReverseList(list.next);
    }
    alert(list.value);
}

const printReverseListCycle = (list) => {     // с помощью цикла
    let arr = [];
    let tmp = list;
    while (tmp) {
      arr.push(tmp.value);
      tmp = tmp.next;
    }
    for (let i = arr.length - 1; i >= 0; i--) {
      alert( arr[i] );
    }
}