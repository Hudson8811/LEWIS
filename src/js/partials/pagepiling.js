$(document).ready(function () {

    let isInited = window.matchMedia('(max-width: 1000px)').matches
    const sections = [...document.querySelectorAll('.js-section')]

    function onScroll() {
        const isPageEnd = window.scrollY + window.innerHeight >= document.scrollingElement.scrollHeight;

        sections.forEach((section) => {
            const { top, bottom } = section.getBoundingClientRect()
            const inViewport = top <= 0 && bottom >= 0
            const id = section.getAttribute('id')

            if (inViewport && !isPageEnd) {
                document.querySelector(`[data-menuanchor="${id}"]`).classList.add('active')
            } else {
                document.querySelector(`[data-menuanchor="${id}"]`).classList.remove('active')
            }
        })

        if (isPageEnd) {
            const id = sections[sections.length - 1].getAttribute('id')
            document.querySelector(`[data-menuanchor="${id}"]`).classList.add('active')
        }
    }

    function scrollToSection() {
        const items = document.querySelectorAll('.header__menu-item');

        [...items].forEach(item => {
            item.addEventListener('click', function (el) {
                el.preventDefault();

                [...sections].forEach(section => {

                    if (section.getAttribute('id') === item.dataset.menuanchor) {
                        console.log(window.scrollY)
                        let { top, bottom } = section.getBoundingClientRect()
                        console.log(top, window.scrollY)
                        window.scrollTo({
                            top: window.scrollY + top,
                            behavior: "smooth"
                        });
                        return
                    }
                });
            })
        })
    }

    function initPaging() {
        const isTablet = window.matchMedia('(max-width: 1000px)').matches

        if (isTablet && isInited) {
            isInited = false

            if ($.fn.pagepiling.destroy) {
                $.fn.pagepiling.destroy('all');
            }

            $('body').css('overflow', 'auto');
            $('html').css('overflow', 'auto');

            [...document.querySelectorAll('.header__menu-item')].forEach(element => {
                if (element.classList.contains('active')) {
                    element.classList.remove('active')
                }
                if (document.getElementById('pagepiling')) {
                    scrollToSection();
                }
            });
            if (document.getElementById('pagepiling')) {
                window.addEventListener('scroll', onScroll)

            }
        } else if (!isTablet && !isInited && document.getElementById('pagepiling')) {
            isInited = true

            if (document.getElementById('pagepiling')) {
                window.removeEventListener('scroll', onScroll)
            }

            const anchors = ['home', 'cases', 'about', 'services', 'partners', 'awards', 'testimonials', 'blog', 'contacts']
            const labels = ['home', 'Selected works', 'about me', 'services', 'My clients', 'awards', 'testimonials', 'My insights', 'get in touch']

            function setLabel(index) {
                const label = labels[index];

                [...document.querySelectorAll('.js-page-label')].forEach(element => {
                    element.textContent = label
                });
            }

            function setPageNumber(index) {
                [...document.querySelectorAll('.js-page-number')].forEach(element => {
                    element.textContent = `${index + 1}/${labels.length}`
                });
            }

            function setActiveMenu(index) {
                const anchor = anchors[index];
                const header = document.querySelector('.header__menu')
                // console.log(header)
                header.classList.remove('active')
                document.querySelector(`[data-menuanchor="${anchor}"]`).classList.add('active')
            }

            $('#pagepiling').pagepiling({
                anchors: anchors,
                verticalCentered: false,
                // normalScrollElements: '.container-main',
                // normalScrollElementTouchThreshold: 1,
                // touchSensitivity: 5,
                // keyboardScrolling: true,
                scrollingSpeed: 150,
                // loopBottom: true,
                easing: 'swing',
                menu: '#myMenu',
                onLeave: function (index, nextIndex, direction) {
                    setPageNumber(nextIndex - 1)
                    setLabel(nextIndex - 1)
                },

                afterRender: function () {
                    setPageNumber(0)
                    setLabel(0)
                    setActiveMenu(0)

                    setTimeout(() => {
                        $('#preloader').css('display', 'none');
                    }, 800);
                }
            });
        }
    }

    initPaging()

    window.addEventListener('resize', initPaging)

    $("a.fancybox").fancybox({
        type: 'iframe',
        allowfullscreen: 'true'
    });
});
