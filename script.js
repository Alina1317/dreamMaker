const burg = document.querySelector('.menu-burger'),
  burgMenu = document.querySelector('.menu'),
  header = document.querySelector('.header');

//навыешиваем класс тогл на бургер меню
burg.onclick = () => {
  burg.classList.toggle('toggle');
  burgMenu.classList.toggle('toggle');
  header.classList.toggle('toggle');
};