// Установка и уменьшение значения счётчика
const makeCounter = () => {
    let count = 0;
    function counter() {
      return count++;
    }
    counter.set = value => count = value;
    counter.decrease = () => count--;  
    return counter;
}


// Сумма с произвольным количеством скобок
const sum = (a) => {
    let currentSum = a;
    function f(b) {
      currentSum += b;
      return f;
    }
    f.toString = function() {
      return currentSum;
    };
    return f;
}
alert( sum(1)(2) ); // 3
alert( sum(5)(-1)(2) ); // 6
alert( sum(6)(-1)(-2)(-3) ); // 0
alert( sum(0)(1)(2)(3)(4)(5) ); // 15