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

function whatsapp(){
    const site = window.location.href;
    window.open(`https://web.whatsapp.com://send?text=Schau Dir die neue CSN Seite an - ${site}`)
}
function whatsapp_mobile(){
    const site = window.location.href;
    window.open(`whatsapp://send?text=Schau Dir die neue CSN Seite an - ${site}`)
}
function mail_share(){
    const site = window.location.href;
    window.open(`mailto:?subject=Schau Dir die neue CSN Website an&body=${site}`)
}
function twitter(){
    const site = window.location.href;
    window.open(`https://twitter.com/share?text=Die neue CSN Website&url=${site}&hashtags=CSN`)
}
function facebook(){
    const site = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${site}`)
}