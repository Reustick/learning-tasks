// Странный instanceof
function A() {}
function B() {}

A.prototype = B.prototype = {};

let a = new A();

alert( a instanceof B ); // true
// Оператор вернёт true, если obj принадлежит классу Class или наследующему от него
// в данном примере a.__proto__ == B.prototype, так что instanceof возвращает true