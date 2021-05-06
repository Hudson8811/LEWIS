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
    if ($('body').width() > 1000) {
        $('#pagepiling').pagepiling({
            anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fivePage', 'sixPage', 'sevenPage', 'achtPage'],
            verticalCentered: false,
        });
    } else {
        $('body').css('overflow', 'auto');
        $('html').css('overflow', 'auto');
    }
});

