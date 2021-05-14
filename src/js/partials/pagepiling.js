$(document).ready(function () {

    let isInited = window.matchMedia('(max-width: 1000px)').matches
    const sections = [...document.querySelectorAll('.js-section')]

    function onScroll() {
        const isPageEnd = window.scrollY + window.innerHeight >= document.scrollingElement.scrollHeight;

        sections.forEach((section) => {
            const { top, bottom } = section.getBoundingClientRect()
            const inViewport = top <= 0 && bottom > 0
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
            });
            if (document.getElementById('pagepiling')) {
                window.addEventListener('scroll', onScroll)
            }
        } else if (!isTablet && !isInited) {
            isInited = true

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

                document.querySelector(`[data-menuanchor="${anchor}"]`).classList.add('active')
            }

            $('#pagepiling').pagepiling({
                anchors: anchors,
                verticalCentered: false,
                // normalScrollElements: '.section',
                normalScrollElementTouchThreshold: 3,
                touchSensitivity: 5,
                keyboardScrolling: true,
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

