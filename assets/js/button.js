function telefonkonferenz(){
    sessionStorage.setItem("produkt", "Conferencing")
    sessionStorage.setItem("anliegen", "Anderes")
    sessionStorage.setItem("nachricht", "Beratung zur klassichen Telefonkonferenz")
    sessionStorage.setItem("init", "true")
    window.location.href="Kontakt.html";
}
function kostenlos_conferencing(){
    sessionStorage.setItem("produkt", "Conferencing")
    sessionStorage.setItem("anliegen", "Testaccount")
    sessionStorage.setItem("init", "true")
    window.location.href="Kontakt.html";
}
function kostenlos_online(){
    sessionStorage.setItem("produkt", "Online-Beratung")
    sessionStorage.setItem("anliegen", "Testaccount")
    sessionStorage.setItem("init", "true")
    window.location.href="Kontakt.html";
}
function kostenlos_beides(){
    sessionStorage.setItem("produkt", "Beide Produkte")
    sessionStorage.setItem("anliegen", "Testaccount")
    sessionStorage.setItem("init", "true")
    window.location.href="Kontakt.html";
}
function kostenlosTesten(){
    sessionStorage.setItem("produkt", "Kein Bezug")
    sessionStorage.setItem("anliegen", "Testaccount")
    sessionStorage.setItem("init", "true")
    window.location.href="Kontakt.html";
}