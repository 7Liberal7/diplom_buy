document.querySelector('.questons__close1').addEventListener('click', questo1);

function questo1() {
  document.querySelector('.questons__close1').classList.toggle('questons__close--active');
  document.querySelector('.questons__text1').classList.toggle('ds-none');
}

document.querySelector('.questons__close2').addEventListener('click', questo2);

function questo2() {
  document.querySelector('.questons__close2').classList.toggle('questons__close--active');
  document.querySelector('.questons__text2').classList.toggle('ds-none');
}

document.querySelector('.questons__close3').addEventListener('click', questo3);

function questo3() {
  document.querySelector('.questons__close3').classList.toggle('questons__close--active');
  document.querySelector('.questons__text3').classList.toggle('ds-none');
}

document.querySelector('.header__btn').addEventListener('click', menuOpen);

function menuOpen() {
  document.querySelector('.mob-menu').classList.add('mob-menu--active');
  document.querySelector('.black').classList.add('black--active');
}

document.querySelector('.mob-menu__close').addEventListener('click', menuClose);

function menuClose() {
  document.querySelector('.mob-menu').classList.remove('mob-menu--active');
  document.querySelector('.black').classList.remove('black--active');
}

document.querySelector('.btn-phone1').addEventListener('click', modalOpenPhone1);
document.querySelector('.btn-phone2').addEventListener('click', modalOpenPhone1);
document.querySelector('.btn-phone3').addEventListener('click', modalOpenPhone1);

function modalOpenPhone1() {
  document.querySelector('.modal1').classList.add('modal--active');
  document.querySelector('.black').classList.add('black--active');
}

document.querySelector('.modal__close1').addEventListener('click', modalClosePhone1);

function modalClosePhone1() {
  document.querySelector('.modal1').classList.remove('modal--active');
  document.querySelector('.black').classList.remove('black--active');
}

document.querySelector('.btn-diplom1').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn-diplom2').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn-diplom3').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn-diplom4').addEventListener('click', modalOpenPhone2);

function modalOpenPhone2() {
  document.querySelector('.modal2').classList.add('modal--active');
  document.querySelector('.black').classList.add('black--active');
}

document.querySelector('.modal__close2').addEventListener('click', modalClosePhone2);

function modalClosePhone2() {
  document.querySelector('.modal2').classList.remove('modal--active');
  document.querySelector('.black').classList.remove('black--active');
}

document.querySelector('.btn-ready1').addEventListener('click', modalOpenPhone3);
document.querySelector('.btn-ready2').addEventListener('click', modalOpenPhone3);

function modalOpenPhone3() {
  document.querySelector('.modal3').classList.add('modal--active');
  document.querySelector('.modal1').classList.remove('modal--active');
  document.querySelector('.modal2').classList.remove('modal--active');
  document.querySelector('.black').classList.add('black--active');
}

document.querySelector('.modal__close3').addEventListener('click', modalClosePhone3);
document.querySelector('.btn-back').addEventListener('click', modalClosePhone3);

function modalClosePhone3() {
  document.querySelector('.modal3').classList.remove('modal--active');
  document.querySelector('.black').classList.remove('black--active');
}