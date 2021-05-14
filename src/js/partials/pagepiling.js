$(document).ready(function () {

    let isInited = false

    function initPaging() {
        const isTablet = window.matchMedia('(max-width: 1000px)').matches

        if (isTablet && isInited) {
            isInited = false
            $.fn.pagepiling.destroy('all');
            $('body').css('overflow', 'auto');
            $('html').css('overflow', 'auto');
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

                console.log(document.querySelector(`[data-menuanchor="${anchor}"]`))
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

