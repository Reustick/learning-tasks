// Класс расширяет объект?
class Rabbit extends Object {
  constructor(name) {
    super();          // надо добавить супер
    this.name = name;
  }
}

let rabbit = new Rabbit("Кроль");

alert( rabbit.hasOwnProperty('name') ); // true