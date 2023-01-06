"use strict"
const swiper = new Swiper('.slider-main-block', {
   // Optional parameters

   loop: true,


   // Navigation arrows
   navigation: {
      nextEl: '.body-main-block__arrow.swiper-button-next',
      prevEl: '.body-main-block__arrow.swiper-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1.2,
         spaceBetween: 10,
         autoHeight: true,
      },
      580: {
         slidesPerView: 1,

      },
   }

});

$(document).ready(function () {
   // на header burger вешаем событие клик
   $('.header__burger').click(function (event) {
      // при клике на бургер и хедер меню добавился класс aktive (нажали-добав класс, нажали-убрался класс) 
      $('.header__burger, .header__menu').toggleClass('active');
      // при открытом бургере блокируем прокрутку страницы
      $('body').toggleClass('lock');
   });
});

// закрытие бургера, при нажатии на меню
const headerLinks = document.querySelectorAll('.header__menu')
headerLinks.forEach((el) => {
   el.addEventListener('click', () => {
      $('.header__burger,.header__menu').toggleClass('active');
      $('body').toggleClass('lock');
   })
})

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



$(document).ready(function () {
   $('.deals__property_links').click(function (e) {
      e.preventDefault()

      // класс где лежать ссылки(табы)
      // 2класс - тело, где лежить контент
      $('.deals__property_links').removeClass('deals__property_links--active');
      $('.deal__tabs-block').removeClass('deal__tabs-block--active');

      $(this).addClass('deals__property_links--active');
      $($(this).attr('href')).addClass('deal__tabs-block--active')

   });
   $('.deals__property_links:first').click();

});

// спойлер-аккордион 
$(document).ready(function () {
   // ссылка, на которую нажимаем 
   $('.spoiler__link').click(function (event) {
      // общий класс спойлера
      if ($('.deals__spoiler').hasClass('one')) {
         // ссылка, на которую нажимаем 
         $('.spoiler__link').not($(this)).removeClass('hidden');
         // блок который идет сразу после ссылки
         $('.deal__tabs-block').not($(this).next()).slideUp(300);
      }
      $(this).toggleClass('hidden').next().slideToggle(300);
   });
});