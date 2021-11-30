const unhide_conferencing = document.getElementById("conferencing");
const unhide_online = document.getElementById("online");
const unhide_warum = document.getElementById("warum");
const suche = document.getElementById("suche");
const dropdown_suche = document.getElementById("dropdown_suche");
const dropdown_conferencing = document.getElementById("dropdown_conferencing");
const dropdown_online = document.getElementById("dropdown_online");
const dropdown_warum = document.getElementById("dropdown_warum");

suche.addEventListener("mouseover", function () {
    dropdown_suche.classList.add("show");
    dropdown_conferencing.classList.remove("show")
    dropdown_online.classList.remove("show");
    dropdown_warum.classList.remove("show");
    unhide_conferencing.classList.remove("active_heading");
    unhide_online.classList.remove("active_heading");
    unhide_warum.classList.remove("active_heading");
})
unhide_conferencing.addEventListener("mouseover", function () {
    dropdown_suche.classList.remove("show");
    suche.classList.remove("active_heading");
    dropdown_conferencing.classList.add("show");
    dropdown_online.classList.remove("show");
    dropdown_warum.classList.remove("show");
    unhide_conferencing.classList.add("active_heading");
    unhide_online.classList.remove("active_heading");
    unhide_warum.classList.remove("active_heading");
})
unhide_online.addEventListener("mouseover", function () {
    dropdown_suche.classList.remove("show");
    suche.classList.remove("active_heading");
    dropdown_conferencing.classList.remove("show");
    dropdown_online.classList.add("show");
    dropdown_warum.classList.remove("show");
    unhide_conferencing.classList.remove("active_heading");
    unhide_online.classList.add("active_heading");
    unhide_warum.classList.remove("active_heading");
})
unhide_warum.addEventListener("mouseover", function () {
    dropdown_suche.classList.remove("show");
    suche.classList.remove("active_heading");
    dropdown_conferencing.classList.remove("show");
    dropdown_online.classList.remove("show");
    dropdown_warum.classList.add("show");
    unhide_conferencing.classList.remove("active_heading");
    unhide_online.classList.remove("active_heading");
    unhide_warum.classList.add("active_heading");
})

dropdown_suche.addEventListener("mouseleave", function () {
    leave_function()
})
dropdown_conferencing.addEventListener("mouseleave", function () {
    leave_function()
})
dropdown_online.addEventListener("mouseleave", function () {
    leave_function()
})
dropdown_warum.addEventListener("mouseleave", function () {
    leave_function()
})

function leave_function() {
    dropdown_suche.classList.remove("show");
    dropdown_conferencing.classList.remove("show");
    dropdown_online.classList.remove("show");
    dropdown_warum.classList.remove("show");
    suche.classList.remove("active_heading")
    unhide_conferencing.classList.remove("active_heading");
    unhide_online.classList.remove("active_heading");
    unhide_warum.classList.remove("active_heading");
}

window.onscroll = function () {
    make_sticky()
};

const navbar = document.getElementById("navbar_sticky");
const sticky = navbar.offsetTop;

function make_sticky() {
    if (window.pageYOffset >= sticky && window.pageYOffset > 0) {
        navbar.classList.add("nav_sticky")
    }else {
        navbar.classList.remove("nav_sticky");
    }
}