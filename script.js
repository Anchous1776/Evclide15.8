let swiper = new Swiper ('.swiper', {
  slidesPerView: 1,
  loop: true,
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
})

let workBtn = document.querySelectorAll('.work__btn');
let tabsWork = document.querySelectorAll('.work__right__content');

workBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    workBtn.forEach(function(btn){ btn.classList.remove('work__btn--active')});
    e.currentTarget.classList.add('work__btn--active');

    tabsWork.forEach(function(element){ element.classList.remove('work__right__content--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__right__content--active');
  });
});


let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
 })

 menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })

})

const accordeons = document.querySelectorAll(".accordeon")

for (let accordeon of accordeons) {
  const control = accordeon.querySelector('.questions__item__btn')
  control.addEventListener('click', ()=> {
    const activeAccordeon = document.querySelector(".accordeon.is-active")
    if (activeAccordeon && activeAccordeon !== accordeon) {
      activeAccordeon.classList.remove('is-active')
    }
      accordeon.classList.toggle('is-active')
  })
}

let serchForm = document.querySelector('.search__block');
let serchBtn = document.querySelector('.header__btn');
let closeBtn = document.querySelector('.header__btn-close');

serchBtn.addEventListener('click' ,

function(e){

  e.stopPropagation();
  serchForm.classList.add('search__block--visible');

  serchBtn.classList.add('header__btn--hidden');

});

closeBtn.addEventListener('click' ,

function(e){

  serchForm.classList.remove('search__block--visible');

  serchBtn.classList.remove('header__btn--hidden');
})

