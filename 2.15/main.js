// Задача Обязателен ли "else"?
// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Родители разрешили?');
//     }
//   }

//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Родители разрешили?');
//   }
// ^^^^^^^^^^ Оба варианта работают одинаково можно обойтись без else

function checkAge(age) {
    return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge(age) {
    return (age > 18) || confirm('Родители разрешили?');
}
// ^^^^^^ Перепишите функцию, используя оператор '?' или '||'



// Функция min(a, b)
function minNumber(a, b) {
   return Math.min(a,b);
}
//^^^^^ первый вариант
function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
}
// ^^^^^^ второй вариант
function min(a, b) {
    return a < b ? a : b;
}
// ^^^^^^^^^^ Третий вариант



// Функция pow(x,n)
function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Степень ${n} не поддерживается, используйте натуральное число`);
  } else {
    alert( pow(x, n) );
  }