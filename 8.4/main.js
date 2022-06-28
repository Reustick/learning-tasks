// Добавьте toString в словарь
let dictionary = Object.create(null, {
    toString: {
      value() {
        return Object.keys(this).join();
      }
    }
});
// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for(let key in dictionary) {
  alert(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
alert(dictionary); // "apple,__proto__"


// Разница между вызовами
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype.sayHi = function() {
  alert(this.name);
};

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();      // Rabbit
Rabbit.prototype.sayHi();  // undefined
Object.getPrototypeOf(rabbit).sayHi();  // undefined
rabbit.__proto__.sayHi();   // undefined