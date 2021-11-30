const slider = tns({
    preventScrollOnTouch: 'force',
    container: '.my-slider',
    items: 1,
    slideBy: '1',
    autoplay: true,
    gutter: 150,
    controls: false,
    autoplayButtonOutput: false,
    autoplayTimeout: 6000,
    speed: 1000,
    responsive: {
        992: {
            items: 2,
            gutter: 150
        }
    }
});
const slider_cards_2 = tns({
    preventScrollOnTouch: 'force',
    container: '.card_slider_2',
    items: 1,
    center: true,
    slideBy: '1',
    autoplay: true,
    mouseDrag: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 6000,
    speed: 1000,
    nav: false,
    controlsContainer: "#card_control_2",

});
const slider_cards_1 = tns({
    preventScrollOnTouch: 'force',
    container: '.card_slider_1',
    items: 1,
    center: true,
    slideBy: '1',
    autoplay: true,
    mouseDrag: true,
    autoplayButtonOutput: false,
    autoplayTimeout: 6000,
    speed: 1000,
    nav: false,
    controlsContainer: "#card_control_1",

});