document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__menu');
    const menuExit = document.querySelector('.header__menu-exit');
    const main = document.querySelector('.main');
    const header = document.querySelector('.header');
    const social = document.querySelector('.header__menu-social')
    const contacts = document.querySelector('.header__menu-contacts')
    const list = document.querySelector('.header__menu-list');

    function setAnimation(item, value, duration) {
        return setTimeout(() => { item.style.opacity = value }, duration)
    }

    let timeout = null;
    let timeout2 = null;
    let timeout3 = null;

    burger.addEventListener('click', function () {
        menu.classList.add('active');
        timeout = setAnimation(social, 1, 300)
        timeout3 = setAnimation(list, 1, 400)
        timeout2 = setAnimation(contacts, 1, 500)
    })

    menuExit.addEventListener('click', function () {
        clearTimeout(timeout)
        clearTimeout(timeout2)
        clearTimeout(timeout3)
        setAnimation(social, 0, 100)
        setAnimation(contacts, 0, 100)
        setAnimation(list, 0, 100)
        menu.classList.remove('active');
    })

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
    function disabledPreloader() {
        console.log('work')
        document.getElementById('preloader').style.display = 'none';
    }

})


