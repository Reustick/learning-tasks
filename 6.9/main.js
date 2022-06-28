// Декоратор-шпион
function spy(func) {
    function wrapper(...args) {
      wrapper.calls.push(args);
      return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}


// Задерживающий декоратор
function delay(f, ms) {
    return function() {
      setTimeout(() => f.apply(this, arguments), ms);
    };
}
let f1000 = delay(alert, 1000);
f1000("test"); // показывает "test" после 1000 мс


// Декоратор debounce
function debounce(f, ms) {
    let isCooldown = false;
    return function() {
      if (isCooldown) return;
      f.apply(this, arguments);
      isCooldown = true;
      setTimeout(() => isCooldown = false, ms);
    };
}


// Тормозящий (throttling) декоратор
function throttle(func, ms) {
    let isThrottled = false,
      savedArgs,
      savedThis;
    function wrapper() {
      if (isThrottled) { // (2)
        savedArgs = arguments;
        savedThis = this;
        return;
      }
      func.apply(this, arguments); // (1)
      isThrottled = true;
      setTimeout(function() {
        isThrottled = false; // (3)
        if (savedArgs) {
          wrapper.apply(savedThis, savedArgs);
          savedArgs = savedThis = null;
        }
      }, ms);
    }
    return wrapper;
}