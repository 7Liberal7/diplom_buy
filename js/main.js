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