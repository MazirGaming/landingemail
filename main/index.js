$('.slick-testmonials').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:"<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
    nextArrow:"<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>"
  });

const btnMenu = document.querySelector('.menu')
const btnClose = document.querySelector('.menu-close')
const headerMobile = document.querySelector('.header-mobile')

btnMenu.onclick = () => {
  headerMobile.classList.add('header-mobile__active')
}

btnClose.onclick = () => {
  headerMobile.classList.remove('header-mobile__active')
}
