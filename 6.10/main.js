// Связанная функция как метод
// function f() {
//     alert( this ); // null 
//   }

//   let user = {
//     g: f.bind(null)
// };

// user.g();


// Повторный bind
function f() {
    alert(this.name);
}
  
f = f.bind( {name: "Вася"} ).bind( {name: "Петя" } );
  
f();  // вася 


// Свойство функции после bind
function sayHi() {
    alert( this.name );
}
  sayHi.test = 5;
  let bound = sayHi.bind({
    name: "Вася"
});

alert( bound.test ); // что выведет? почему? undefined результат bind будет другой объект, а у него уже нет свойства test


// Исправьте функцию, теряющую "this"
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

  let user = {
    name: 'Вася',
    loginOk() {
      alert(`${this.name} logged in`);
    },
    loginFail() {
      alert(`${this.name} failed to log in`);
    },
};
  
askPassword(user.loginOk.bind(user), user.loginFail.bind(user));



// Использование частично применённой функции для логина
function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
  let user1 = {
    name: 'John',
  
    login(result) {
      alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};
  
askPassword(() => user1.login(true), () => user1.login(false));  // используем стрелочную функцию