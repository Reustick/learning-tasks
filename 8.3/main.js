// Добавить функциям метод "f.defer(ms)"
Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
};

function f() {
    alert("Hello!");
}

f.defer(1000);


// Добавьте функциям декорирующий метод "defer()"
Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
      setTimeout(() => f.apply(this, args), ms);
    }
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2);