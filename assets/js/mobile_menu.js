const close_button = document.getElementById("closing_button");
const hamburger = document.getElementById("hamburger_button");
const mobile_menu = document.getElementById("mobile-menu");
const mobile_menu_width_helper = document.getElementById("mobile_container");
const styles = window.getComputedStyle(mobile_menu_width_helper);
const mobile_width = styles.width;
close_button.addEventListener("click", function () {
    mobile_menu.style.width = "0";
})
hamburger.addEventListener("click", function () {
    mobile_menu.style.setProperty('width', mobile_width);

})