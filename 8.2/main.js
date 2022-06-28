// // Изменяем "prototype"
// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype = {};

// alert( rabbit.eats ); // ? true

// ______________

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// Rabbit.prototype.eats = false;

// alert( rabbit.eats ); // ? false

// ______________

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete rabbit.eats;

// alert( rabbit.eats ); // ? true

// ______________

// function Rabbit() {}
// Rabbit.prototype = {
//   eats: true
// };

// let rabbit = new Rabbit();

// delete Rabbit.prototype.eats;

// alert( rabbit.eats ); // ? undefined




// Создайте новый объект с помощью уже существующего
// function User(name) {
//     this.name = name;
// }

// let user = new User('Dima');
// let user2 = new user.constructor('Roma');
  
// alert( user2.name ); // Roma
// ______________________

// function User(name) {
//     this.name = name;
// }

// User.prototype = {}; // (*)

// let user = new User('Dima');
// let user2 = new user.constructor('Roma');
  
// alert( user2.name ); // undefined