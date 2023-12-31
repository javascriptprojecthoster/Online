var option = document.querySelectorAll('.custom-select option'),
selectWrapper = document.querySelector('.select-wrapper'); // Создание контейнера для псевдосписка

var selectResult = document.createElement('div');
selectResult.classList.add('select-result');
selectWrapper.appendChild(selectResult); // Создание первого элемента псевдосписка. Здесь будет показан выбранный элемент

var firstDiv = document.createElement('div');
firstDiv.style.display = 'none';
selectResult.appendChild(firstDiv); // Создание интуитивной иконки для псевдосписка

var iconSelect = document.createElement('span');
iconSelect.innerHTML = "";
selectResult.appendChild(iconSelect);
document.querySelectorAll('.select-result div').forEach(function (item) {
item.addEventListener('onmouseover', function (e) {
console.log(e.target);
e.target.style.backgroundColor = 'red';
});
}); // Перебор <option> и копирование их в <div> и вставка в контейнер для псевдосписка

option.forEach(function (item) {
var div = document.createElement('div');
div.innerHTML = item.innerHTML;
selectResult.appendChild(div);
}); // Открытие\Закрытие псевдосписка

document.querySelector('.select-wrapper').addEventListener('click', function (e) {
selectResult.classList.toggle('select-active');
}); // Клик на каждом элементе псевдосписка

document.querySelectorAll('.select-result div').forEach(function (item) {
item.addEventListener('click', function (e) {
// Если псевдосписок раскрыт, то вставляем выбранный элемент на первую позицию и закрываем псевдосписок
if (selectResult.classList.contains('select-active')) {
  document.querySelector('.select-result div').innerHTML = e.target.innerHTML;
  firstDiv.style.display = 'block'; // <option selected> если совпадает содержимое с выбранным элементом псевдосписка

  option.forEach(function (item) {
    item.innerHTML === e.target.innerHTML ? item.selected = true : false;
  });
}
});
}); // Fix Убирает дублирование выбранного элемента в списке псевдосписка

document.querySelectorAll('.select-result div').forEach(function (item) {
item.addEventListener('click', function (e) {
if (selectResult.classList.contains('select-active')) {
  document.querySelectorAll('.select-result div').forEach(function (el) {
    el.classList.remove('display-none');
  });
  e.target.classList.add('display-none');
}
});
}); // Fix Убирает дублирование только первого элемента псевдосписка, который является заглушкой по умолчанию

/* document.querySelectorAll('.select-result div').forEach((item) => {
 item.addEventListener('click', (e) => {
     if (selectResult.classList.contains('select-active') && e.target.innerHTML === document.querySelector('.custom-select option').innerHTML) {
         e.target.classList.add('display-none');
     } else if (selectResult.classList.contains('select-active') && e.target.innerHTML !== document.querySelector('.custom-select option').innerHTML) {
         document.querySelectorAll('.select-result div')[1].classList.remove('display-none')
     }
 })
});*/
// Fix Закрывает псевдосписок при клике вне его области

document.addEventListener('click', function (e) {
// ВАЖНО!
// "ИЛИ" срабатывает после первого совпадения и дальше не проверяет
// Поэтому, если убрать сравнение с document, то проверяется второе условие и при клике за пределы <html> появится ошибка typeError, так как у document нет метода .contains
if (e.target.parentNode === document || !e.target.parentNode.classList.contains('select-active')) {
selectResult.classList.remove('select-active');
}
}); // BONUS
// При клике на <option> выбирается соответствующий элемент в псевдосписке

document.querySelector('.custom-select').addEventListener('change', function (e) {
document.querySelectorAll('.select-result div').forEach(function (item) {
item.classList.remove('display-none');
});
document.querySelectorAll('.select-result div').forEach(function (item) {
if (item.innerHTML === e.target.options[e.target.selectedIndex].innerHTML) {
  item.classList.add('display-none');
  document.querySelector('.select-result div').innerHTML = item.innerHTML;
  firstDiv.style.display = 'block';
}
});


});