$(document).ready(function () {
    // $('#pagepiling').pagepiling({
    //     menu: null,
    //     direction: 'vertical',
    //     verticalCentered: true,
    //     sectionsColor: [],
    //     anchors: [],
    //     scrollingSpeed: 400,
    //     easing: 'swing',
    //     loopBottom: false,
    //     loopTop: false,
    //     css3: true,
    //     navigation: {
    //         'textColor': '#000',
    //         'bulletsColor': '#000',
    //         'position': 'right',
    //         'tooltips': ['section1', 'section2', 'section3', 'section4']
    //     },
    //     normalScrollElements: null,
    //     normalScrollElementTouchThreshold: 5,
    //     touchSensitivity: 5,
    //     keyboardScrolling: true,
    //     sectionSelector: '.section',
    //     animateAnchor: true,

    //     //events
    //     onLeave: function (index, nextIndex, direction) { },
    //     afterLoad: function (anchorLink, index) { },
    //     afterRender: function () { },
    // });


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

            const anchors = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
            const labels = ['home', 'cases', 'about', 'services', 'partners', 'awards', 'testimonials', 'blog', 'contacts']

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

            $('#pagepiling').pagepiling({
                anchors: anchors,
                verticalCentered: false,
                menu: null,
                normalScrollElements: null,
                normalScrollElementTouchThreshold: 5,
                touchSensitivity: 5,
                keyboardScrolling: true,

                onLeave: function (index, nextIndex, direction) {
                    setPageNumber(nextIndex - 1)
                    setLabel(nextIndex - 1)
                },

                afterRender: function () {
                    setPageNumber(0)
                    setLabel(0)
                }
            });
        }
    }

    initPaging()

    window.addEventListener('resize', initPaging)



    // function imageMoving() {
    //     $(".js-projects-img").on("mouseout", function(e) {
    //         $(this).css("opacity", "0");
    //     });
    //     $(".js-projects-img").on("mousemove", function(e) {
    //         $(this).css("opacity", "1");
    //         var pos = $(this).offset();
    //         var elem_left = pos.left;
    //         var elem_top = pos.top;
    //         if (e.pageX < elem_left || e.pageX > elem_left + $(this).innerWidth() || e.pageY < elem_top || e.pageY > elem_top + $(this).innerHeight()) {
    //             $(this).css("opacity", "0");
    //             $(this).find(".projects-list__img").css({
    //                 'transform': 'translateY(0) translateX(0)'
    //             });
    //         } else {
    //             $(this).css("opacity", "1");
    //             var Xinner = e.pageX - elem_left - $(this).innerWidth() / 2 + 40;
    //             var Yinner = e.pageY - elem_top - $(this).innerHeight() / 2 + 40;
    //             $(this).find(".projects-list__img").css({
    //                 'transform': 'translateY(' + Yinner + 'px) translateX(' + Xinner + 'px)'
    //             });
    //         }
    //     });
    // }
});

