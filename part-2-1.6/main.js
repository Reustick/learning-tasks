// Получите атрибут
let elem = document.querySelector('[data-widget-name]');
alert(elem.dataset.widgetName);
alert(elem.getAttribute('data-widget-name'));


// Сделайте внешние ссылки оранжевыми
let links = document.querySelectorAll('a');

for (let link of links) {
  let href = link.getAttribute('href');
  if (!href) continue;
  if (!href.includes('://')) continue;
  if (href.startsWith('http://internal.com')) continue;
  link.style.color = 'orange';
}