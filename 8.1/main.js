// Работа с прототипами
let animal = {
    jumps: null
  };
  let rabbit = {
    __proto__: animal,
    jumps: true
};
  
alert( rabbit.jumps ); // ? (1) true
  
delete rabbit.jumps;
  
alert( rabbit.jumps ); // ? (2) null
  
delete animal.jumps;
  
alert( rabbit.jumps ); // ? (3) undefined


// Алгоритм поиска
let head = {
    glasses: 1
};
  
let table = {
    pen: 3,
    __proto__: head
};
  
let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};
  
let pockets = {
    money: 2000,
    __proto__: bed
};



// Куда будет произведена запись?
// let animal = {
//     eat() {
//       this.full = true;
//     }
//   };
  
//   let rabbit = {
//     __proto__: animal
//   };
  
//   rabbit.eat();  ответ rabbit



// Почему наедаются оба хомяка?
let hamster = {
    stomach: [],
  
    eat(food) {
      this.stomach.push(food);
    }
};
  
let speedy = {
    __proto__: hamster,
    stomach: []           // необходимо записать свойство в сам объект
};
  
let lazy = {
    __proto__: hamster,
    stomach: []         // необходимо записать свойство в сам объект
};
  
speedy.eat("apple");
alert( speedy.stomach );
alert( lazy.stomach );