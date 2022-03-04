

const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const blockID = anchor.getAttribute('href')
    document.querySelector('' + blockID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}

// document.querySelector('.questons__close1').addEventListener('click', questo1);

// function questo1() {
//   document.querySelector('.questons__close1').classList.toggle('questons__close--active');
//   document.querySelector('.questons__text1').classList.toggle('ds-none');
// }

// document.querySelector('.questons__close2').addEventListener('click', questo2);

// function questo2() {
//   document.querySelector('.questons__close2').classList.toggle('questons__close--active');
//   document.querySelector('.questons__text2').classList.toggle('ds-none');
// }

// document.querySelector('.questons__close3').addEventListener('click', questo3);

// function questo3() {
//   document.querySelector('.questons__close3').classList.toggle('questons__close--active');
//   document.querySelector('.questons__text3').classList.toggle('ds-none');
// }

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
document.querySelector('.btn200').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn201').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn202').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn203').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn204').addEventListener('click', modalOpenPhone2);
document.querySelector('.btn--info-text').addEventListener('click', modalOpenPhone2);


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
  document.querySelector('.black').classList.add('black--active');
}

document.querySelector('.modal__close3').addEventListener('click', modalClosePhone3);
document.querySelector('.btn-back').addEventListener('click', modalClosePhone3);

function modalClosePhone3() {
  document.querySelector('.modal3').classList.remove('modal--active');
  document.querySelector('.black').classList.remove('black--active');
}

document.querySelector('.slider-price__btn-span1').addEventListener('click', slider11);
document.querySelector('.price-diplom__wrapper-item1').addEventListener('click', slider11);
document.querySelector('.price-diplom__wrapper-right-img7').addEventListener('click', slider12);

function slider11() {
  document.querySelector('.slider-price__btn-span1').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.remove('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span2').addEventListener('click', slider12);
document.querySelector('.price-diplom__wrapper-item2').addEventListener('click', slider12);
document.querySelector('.price-diplom__wrapper-right-img1').addEventListener('click', slider17);

function slider12() {
  document.querySelector('.slider-price__btn-span1').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.remove('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span3').addEventListener('click', slider13);
document.querySelector('.price-diplom__wrapper-item3').addEventListener('click', slider13);
document.querySelector('.price-diplom__wrapper-right-img2').addEventListener('click', slider13);

function slider13() {
  document.querySelector('.slider-price__btn-span1').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.remove('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span4').addEventListener('click', slider14);
document.querySelector('.price-diplom__wrapper-item4').addEventListener('click', slider14);
document.querySelector('.price-diplom__wrapper-right-img3').addEventListener('click', slider14);

function slider14() {
  document.querySelector('.slider-price__btn-span1').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.remove('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span5').addEventListener('click', slider15);
document.querySelector('.price-diplom__wrapper-item5').addEventListener('click', slider15);
document.querySelector('.price-diplom__wrapper-right-img4').addEventListener('click', slider15);

function slider15() {
  document.querySelector('.slider-price__btn-span1').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.remove('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span6').addEventListener('click', slider16);
document.querySelector('.price-diplom__wrapper-item6').addEventListener('click', slider16);
document.querySelector('.price-diplom__wrapper-right-img5').addEventListener('click', slider16);

function slider16() {
  document.querySelector('.slider-price__btn-span1').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.add('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.remove('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span7').addEventListener('click', slider17);
document.querySelector('.price-diplom__wrapper-right-img6').addEventListener('click', slider11);

function slider17() {
  document.querySelector('.slider-price__btn-span1').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span2').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span3').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span4').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span5').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span6').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item1').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item2').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item3').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item4').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item5').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item6').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img1').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img2').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img3').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img4').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img5').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img6').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img7').classList.remove('ds-none');
  document.querySelector('.slider-price__btn-span7').classList.add('slider-price__btn-span--active');
}

document.querySelector('.slider-price__btn-span21').addEventListener('click', slider21);
document.querySelector('.price-diplom__wrapper-item21').addEventListener('click', slider21);
document.querySelector('.price-diplom__wrapper-right-img26').addEventListener('click', slider21);


function slider21() {
  document.querySelector('.slider-price__btn-span21').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span22').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span23').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span24').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span25').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span26').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item21').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item22').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item23').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item24').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item25').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item26').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img21').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img22').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img23').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img24').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img25').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img26').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span22').addEventListener('click', slider22);
document.querySelector('.price-diplom__wrapper-item22').addEventListener('click', slider22);
document.querySelector('.price-diplom__wrapper-right-img21').addEventListener('click', slider22);


function slider22() {
  document.querySelector('.slider-price__btn-span21').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span22').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span23').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span24').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span25').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span26').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item21').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item22').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item23').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item24').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item25').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item26').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img21').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img22').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img23').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img24').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img25').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img26').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span23').addEventListener('click', slider23);
document.querySelector('.price-diplom__wrapper-item23').addEventListener('click', slider23);
document.querySelector('.price-diplom__wrapper-right-img22').addEventListener('click', slider23);

function slider23() {
  document.querySelector('.slider-price__btn-span21').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span22').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span23').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span24').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span25').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span26').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item21').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item22').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item23').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item24').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item25').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item26').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img21').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img22').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img23').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img24').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img25').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img26').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span24').addEventListener('click', slider24);
document.querySelector('.price-diplom__wrapper-item24').addEventListener('click', slider24);
document.querySelector('.price-diplom__wrapper-right-img23').addEventListener('click', slider24);

function slider24() {
  document.querySelector('.slider-price__btn-span21').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span22').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span23').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span24').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span25').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span26').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item21').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item22').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item23').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item24').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item25').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item26').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img21').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img22').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img23').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img24').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img25').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img26').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span25').addEventListener('click', slider25);
document.querySelector('.price-diplom__wrapper-item25').addEventListener('click', slider25);
document.querySelector('.price-diplom__wrapper-right-img24').addEventListener('click', slider25);

function slider25() {
  document.querySelector('.slider-price__btn-span21').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span22').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span23').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span24').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span25').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span26').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item21').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item22').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item23').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item24').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item25').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item26').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img21').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img22').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img23').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img24').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img25').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img26').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span26').addEventListener('click', slider26);
document.querySelector('.price-diplom__wrapper-item26').addEventListener('click', slider26);
document.querySelector('.price-diplom__wrapper-right-img25').addEventListener('click', slider26);

function slider26() {
  document.querySelector('.slider-price__btn-span21').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span22').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span23').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span24').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span25').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span26').classList.add('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item21').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item22').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item23').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item24').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item25').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item26').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img21').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img22').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img23').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img24').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img25').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img26').classList.remove('ds-none');
}

document.querySelector('.slider-price__btn-span31').addEventListener('click', slider31);
document.querySelector('.price-diplom__wrapper-item31').addEventListener('click', slider31);
document.querySelector('.price-diplom__wrapper-right-img37').addEventListener('click', slider31);

function slider31() {
  document.querySelector('.slider-price__btn-span31').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');

}

document.querySelector('.slider-price__btn-span38').addEventListener('click', slider32);
document.querySelector('.price-diplom__wrapper-item31').addEventListener('click', slider32);
document.querySelector('.price-diplom__wrapper-right-img31').addEventListener('click', slider32);

function slider32() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span38').classList.add('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.remove('ds-none');
}

document.querySelector('.slider-price__btn-span32').addEventListener('click', slider33);
document.querySelector('.price-diplom__wrapper-item32').addEventListener('click', slider33);
document.querySelector('.price-diplom__wrapper-right-img38').addEventListener('click', slider33);

function slider33() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span33').addEventListener('click', slider34);
document.querySelector('.price-diplom__wrapper-item33').addEventListener('click', slider34);
document.querySelector('.price-diplom__wrapper-right-img32').addEventListener('click', slider34);

function slider34() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span34').addEventListener('click', slider35);
document.querySelector('.price-diplom__wrapper-item34').addEventListener('click', slider35);
document.querySelector('.price-diplom__wrapper-right-img33').addEventListener('click', slider35);

function slider35() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span35').addEventListener('click', slider36);
document.querySelector('.price-diplom__wrapper-item35').addEventListener('click', slider36);
document.querySelector('.price-diplom__wrapper-right-img34').addEventListener('click', slider36);

function slider36() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span36').addEventListener('click', slider37);
document.querySelector('.price-diplom__wrapper-item36').addEventListener('click', slider37);
document.querySelector('.price-diplom__wrapper-right-img35').addEventListener('click', slider37);

function slider37() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.add('ds-none');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span37').addEventListener('click', slider38);
document.querySelector('.price-diplom__wrapper-right-img36').addEventListener('click', slider38);
document.querySelector('.price-diplom__wrapper-item37').addEventListener('click', slider38);

function slider38() {
  document.querySelector('.slider-price__btn-span31').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span32').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span33').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span34').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span35').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span36').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span37').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span38').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item31').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item32').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item33').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item34').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item35').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item36').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item37').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img38').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img31').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img32').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img33').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img34').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img35').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img36').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img37').classList.remove('ds-none');
}

document.querySelector('.slider-price__btn-span41').addEventListener('click', slider41);
document.querySelector('.price-diplom__wrapper-item41').addEventListener('click', slider41);
document.querySelector('.price-diplom__wrapper-right-img46').addEventListener('click', slider41);

function slider41() {
  document.querySelector('.slider-price__btn-span41').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span42').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span43').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span44').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span45').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span46').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item41').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item42').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item43').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item44').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item45').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item46').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img41').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img42').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img43').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img44').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img45').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img46').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span42').addEventListener('click', slider42);
document.querySelector('.price-diplom__wrapper-item42').addEventListener('click', slider42);
document.querySelector('.price-diplom__wrapper-right-img41').addEventListener('click', slider42);

function slider42() {
  document.querySelector('.slider-price__btn-span41').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span42').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span43').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span44').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span45').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span46').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item41').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item42').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item43').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item44').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item45').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item46').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img41').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img42').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img43').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img44').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img45').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img46').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span43').addEventListener('click', slider43);
document.querySelector('.price-diplom__wrapper-item43').addEventListener('click', slider43);
document.querySelector('.price-diplom__wrapper-right-img42').addEventListener('click', slider43);

function slider43() {
  document.querySelector('.slider-price__btn-span41').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span42').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span43').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span44').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span45').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span46').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item41').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item42').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item43').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item44').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item45').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item46').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img41').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img42').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img43').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img44').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img45').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img46').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span44').addEventListener('click', slider44);
document.querySelector('.price-diplom__wrapper-item44').addEventListener('click', slider44);
document.querySelector('.price-diplom__wrapper-right-img43').addEventListener('click', slider44);

function slider44() {
  document.querySelector('.slider-price__btn-span41').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span42').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span43').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span44').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span45').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span46').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item41').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item42').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item43').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item44').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item45').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item46').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img41').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img42').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img43').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img44').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img45').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img46').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span45').addEventListener('click', slider45);
document.querySelector('.price-diplom__wrapper-item45').addEventListener('click', slider45);
document.querySelector('.price-diplom__wrapper-right-img44').addEventListener('click', slider45);

function slider45() {
  document.querySelector('.slider-price__btn-span41').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span42').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span43').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span44').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span45').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span46').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item41').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item42').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item43').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item44').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item45').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item46').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img41').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img42').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img43').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img44').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img45').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img46').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span46').addEventListener('click', slider46);
document.querySelector('.price-diplom__wrapper-item46').addEventListener('click', slider46);
document.querySelector('.price-diplom__wrapper-right-img45').addEventListener('click', slider46);

function slider46() {
  document.querySelector('.slider-price__btn-span41').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span42').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span43').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span44').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span45').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span46').classList.add('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item41').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item42').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item43').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item44').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item45').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item46').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img41').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img42').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img43').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img44').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img45').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img46').classList.remove('ds-none');
}

document.querySelector('.slider-price__btn-span51').addEventListener('click', slider51);
document.querySelector('.price-diplom__wrapper-item51').addEventListener('click', slider51);
document.querySelector('.price-diplom__wrapper-right-img56').addEventListener('click', slider51);


function slider51() {
  document.querySelector('.slider-price__btn-span51').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span52').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span53').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span54').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span55').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span56').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item51').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item52').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item53').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item54').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item55').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item56').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img51').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img52').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img53').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img54').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img55').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img56').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span52').addEventListener('click', slider52);
document.querySelector('.price-diplom__wrapper-item52').addEventListener('click', slider52);
document.querySelector('.price-diplom__wrapper-right-img51').addEventListener('click', slider52);

function slider52() {
  document.querySelector('.slider-price__btn-span51').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span52').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span53').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span54').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span55').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span56').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item51').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item52').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item53').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item54').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item55').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item56').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img51').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img52').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img53').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img54').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img55').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img56').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span53').addEventListener('click', slider53);
document.querySelector('.price-diplom__wrapper-item53').addEventListener('click', slider53);
document.querySelector('.price-diplom__wrapper-right-img52').addEventListener('click', slider53);

function slider53() {
  document.querySelector('.slider-price__btn-span51').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span52').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span53').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span54').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span55').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span56').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item51').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item52').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item53').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item54').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item55').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item56').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img51').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img52').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img53').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img54').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img55').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img56').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span54').addEventListener('click', slider54);
document.querySelector('.price-diplom__wrapper-item54').addEventListener('click', slider54);
document.querySelector('.price-diplom__wrapper-right-img53').addEventListener('click', slider54);

function slider54() {
  document.querySelector('.slider-price__btn-span51').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span52').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span53').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span54').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span55').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span56').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item51').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item52').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item53').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item54').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item55').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item56').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img51').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img52').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img53').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img54').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img55').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img56').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span55').addEventListener('click', slider55);
document.querySelector('.price-diplom__wrapper-item55').addEventListener('click', slider55);
document.querySelector('.price-diplom__wrapper-right-img54').addEventListener('click', slider55);

function slider55() {
  document.querySelector('.slider-price__btn-span51').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span52').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span53').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span54').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span55').classList.add('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span56').classList.remove('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item51').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item52').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item53').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item54').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item55').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item56').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img51').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img52').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img53').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img54').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img55').classList.remove('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img56').classList.add('ds-none');
}

document.querySelector('.slider-price__btn-span56').addEventListener('click', slider56);
document.querySelector('.price-diplom__wrapper-item56').addEventListener('click', slider56);
document.querySelector('.price-diplom__wrapper-right-img55').addEventListener('click', slider56);

function slider56() {
  document.querySelector('.slider-price__btn-span51').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span52').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span53').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span54').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span55').classList.remove('slider-price__btn-span--active');
  document.querySelector('.slider-price__btn-span56').classList.add('slider-price__btn-span--active');
  document.querySelector('.price-diplom__wrapper-item51').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item52').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item53').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item54').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item55').classList.remove('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-item56').classList.add('price-diplom__wrapper-item--acitve');
  document.querySelector('.price-diplom__wrapper-right-img51').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img52').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img53').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img54').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img55').classList.add('ds-none');
  document.querySelector('.price-diplom__wrapper-right-img56').classList.remove('ds-none');
}