// Проверка синтаксиса
// let user = {
//     name: "Джон",
//     go: function() { alert(this.name) }
// }
  
// (user.go)() // Uncaught ReferenceError: user is not defined



// Объясните значение "this"
let obj, method;

obj = {
  go: function() { alert(this); }
};

obj.go();               // (1) [object Object]  вызов метода объекта через точку

(obj.go)();             // (2) [object Object]  тут такой же вызов но немного другой синтаксис добавились круглые скобки

(method = obj.go)();    // (3) undefined   потеря значени this отсюда и undefined

(obj.go || obj.stop)(); // (4) undefined   потеря значени this отсюда и undefined


// Использование "this" в литерале объекта
function makeUser() {
    return {
      name: "Джон",
      ref: this
    };
  };
  
  let user = makeUser();
  
  alert( user.ref.name ); // Каким будет результат?  Error: Cannot read property 'name' of undefined



// Создайте калькулятор
let calculator = {
    sum() {
      return this.a + this.b;
    },
  
    mul() {
      return this.a * this.b;
    },
  
    read() {
      this.a = +prompt('a?', 0);
      this.b = +prompt('b?', 0);
    }
};
  
calculator.read();
alert( calculator.sum() );
alert( calculator.mul() );



// Цепь вызовов
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep() {
      alert( this.step );
      return this;
    }
}
ladder.up().up().down().up().down().showStep();