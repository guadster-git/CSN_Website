const close_button = document.getElementById("closing_button");
const close_button_white = document.getElementById("closing_button_white");
const hamburger = document.getElementById("hamburger_button");
const mobile_menu = document.getElementById("mobile-menu");


close_button.addEventListener("click", function () {
    mobile_menu.style.width = "0";
})
close_button_white.addEventListener("click", function () {
    mobile_menu.style.width = "0";
})
hamburger.addEventListener("click", function () {
    mobile_menu.style.setProperty('width', '100vw');

})