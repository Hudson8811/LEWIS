window.onload = function () {
    $('.header__burger').on('click', function () {
        $('.header__menu').addClass('active')
    })

    $('.header__menu-exit').on('click', function () {
        $('.header__menu').removeClass('active')
    })

    const main = document.querySelector('.main')
    const header = document.querySelector('.header')
    if (header.classList.contains("header-js")) {
        window.addEventListener('scroll', () => {

            let y = window.scrollY;
            let headerHeight = header.offsetHeight;

            if (y > headerHeight) {
                main.style.paddingTop = headerHeight + 'px';
                header.classList.add('is-fixed');
                header.style.top = -headerHeight + "px";
                header.style.transform = "translateY(100%)";
            } else if (y === 0) {
                header.classList.remove('is-fixed');
                main.style.paddingTop = 0;
                header.style.top = 0;
                header.style.transform = "translateY(0%)";
            }
        })
    }


    function initLoader() {
        const isTablet = window.matchMedia('(max-width: 1000px)').matches

        if (isTablet) {
            setTimeout(() => {
                $('#preloader').css('display', 'none');
            }, 500);
        }
    }
    initLoader()

}


