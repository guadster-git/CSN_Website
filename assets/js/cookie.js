const cookieBox = document.querySelector(".cookie");
const overlay = document.getElementById("overlay");
const acceptBtn_all = document.getElementById("all_cookies");
const acceptBtn_functional = document.getElementById("functional_cookies");
acceptBtn_all.onclick = () => {
    //setting cookie for 1 month, after one month it'll be expired automatically
    document.cookie = "CookieBy=CSN; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) { //if cookie is set
        cookieBox.classList.add("hide_cookie"); //hide cookie box
    } else { //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
    //removing overlay
    overlay.classList.add("hide");
}
acceptBtn_functional.onclick = () => {
    //setting cookie for 1 month, after one month it'll be expired automatically
    document.cookie = "CookieBy=CSN; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) { //if cookie is set
        cookieBox.classList.add("hide_cookie"); //hide cookie box
    } else { //if cookie not set then alert an error
        alert("Cookie can't be set! Please unblock this site from the cookie setting of your browser.");
    }
    //removing overlay
    overlay.classList.add("hide");
}
let checkCookie = document.cookie.indexOf("CookieBy=CSN"); //checking our cookie
//if cookie is set then hide the cookie box else show it
checkCookie !== -1 ? overlay.classList.add("hide") : overlay.classList.remove("hide");



