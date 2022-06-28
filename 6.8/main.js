// Вывод каждую секунду
const printNumbers = (from, to) => {
    let current = from;
    let timerId = setInterval(function() {   // setIntrval
      alert(current);
      if (current == to) {
        clearInterval(timerId);
      }
      current++;
    }, 1000);
}

function printNumbers(from, to) {
    let current = from;
    setTimeout(function go() {
      alert(current);
      if (current < to) {
        setTimeout(go, 1000);      // setTimeout
      }
      current++;
    }, 1000);
}

// Что покажет setTimeout?
let i = 0;

setTimeout(() => alert(i), 100); // setTimeout выполнится после цикла, так как сначала идет синхронный код а потом асинхронный

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}
