$('.header__burger').on('click', function () {
    $('.header__menu').addClass('active')
})

$('.header__menu-exit').on('click', function () {
    $('.header__menu').removeClass('active')
})