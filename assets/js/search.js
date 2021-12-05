const searchbar = document.getElementById("search_bar")
const searchbar_mobile = document.getElementById("mobile-search-input")
searchbar.addEventListener("keydown", function (event){
    if(event.key === "Enter"){
        search();
    }
})
searchbar_mobile.addEventListener("keydown", function (event){
    if(event.key === "Enter"){
        mobileSearch();
    }
})

function mobileSearch(){
    const to_search = document.getElementById("mobile-search-input");
    const close_menu = document.getElementById("mobile-menu")
    let to_search_formatted = to_search.value.split(' ').join('')
    to_search_formatted = to_search_formatted.replace(/[^a-zA-Z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]/g, "")
    if (search_term_map.hasOwnProperty(to_search_formatted.toLowerCase())){
        close_menu.style.width = "0"
        window.location.href = search_term_map[to_search_formatted.toLowerCase()]
    }
    else if(to_search.value === "") {
        alert("Bitte einen Suchbegriff eingeben!")
    }
    else {
        alert("Suchbegriff nicht gefunden!")
    }
}

function search(){
    const to_search = document.getElementById("search_bar");
    let to_search_formatted = to_search.value.split(' ').join('')
    to_search_formatted = to_search_formatted.replace(/[^a-zA-Z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]/g, "")
    console.log(to_search_formatted)
    if (search_term_map.hasOwnProperty(to_search_formatted.toLowerCase())){
        window.location.href = search_term_map[to_search_formatted.toLowerCase()]
    }
    else if(to_search.value === "") {
        alert("Bitte einen Suchbegriff eingeben!")
    }
    else {
        alert("Suchbegriff nicht gefunden!")
    }

}

const search_term_map = {
    "telefon" : "conferencing.html#Telefonkonferenzen",
    "audio" : "conferencing.html#Telefonkonferenzen",
    "webinar" : "conferencing.html#Webinare",
    "web" : "conferencing.html#Webkonferenz",
    "einsatzbereiche" : "conferencing.html#bereiche",
    "bereiche" : "conferencing.html#bereiche",
    "alltag" : "conferencing.html#bereiche",
    "tel" : "conferencing.html#Telefonkonferenzen",
    "handy" : "conferencing.html#Telefonkonferenzen",
    "kommunikation" : "conferencing.html#Telefonkonferenzen",
    "youtube" : "conferencing.html#Videokonferenzen",
    "operator" : "conferencing.html#Operatorkonferenzen",
    "dial-in" : "conferencing.html#highlights",
    "dial-out" : "conferencing.html#highlights",
    "videokonferenzen" : "conferencing.html#highlights",
    "anmeldeformulare" : "conferencing.html#highlights",
    "formular" : "conferencing.html#highlights",
    "playback" : "conferencing.html#highlights",
    "aufzeichnung" : "conferencing.html#highlights",
    "landing-page" : "conferencing.html#highlights",
    "kalender" : "conferencing.html#highlights",
    "wortmeldung" : "conferencing.html#highlights",
    "webcast" : "conferencing.html#highlights",
    "dashboard" : "conferencing.html#highlights",
    "steuerung" : "conferencing.html#highlights",
    "realtimesteuerung" : "conferencing.html#highlights",
    "onlinepräsentationen" : "conferencing.html#features",
    "weblinks" : "conferencing.html#features",
    "dateifreigabe" : "conferencing.html#features",
    "moderation" : "conferencing.html#features",
    "co-moderation" : "conferencing.html#features",
    "whiteboard" : "conferencing.html#features",
    "multiplechoice" : "conferencing.html#features",
    "umfragen" : "conferencing.html#features",
    "privat" : "conferencing.html#features",
    "nachrichten" : "conferencing.html#features",
    "schnitt" : "conferencing.html#features",
    "videoschnitt" : "conferencing.html#features",
    "marketing" : "conferencing.html#Marketing",
    "vertrieb" : "conferencing.html#Marketing",
    "vertriebskanal" : "conferencing.html#Marketing",
    "schulung" : "conferencing.html#Schulung",
    "training" : "conferencing.html#Schulung",
    "lernen" : "conferencing.html#Schulung",
    "schule" : "conferencing.html#Schulung",
    "ausbildung" : "conferencing.html#Schulung",
    "bildung" : "conferencing.html#Schulung",
    "online-schulung" : "conferencing.html#Schulung",
    "business" : "conferencing.html#Business-Konferenzen",
    "adhoc" : "conferencing.html#Business-Konferenzen",
    "investor" : "conferencing.html#Investor",
    "relations" : "conferencing.html#Investor",
    "aktionäre" : "conferencing.html#Investor",
    "ir" : "conferencing.html#Investor",
    "recruiting" : "conferencing.html#Recruiting",
    "mitarbeiter" : "conferencing.html#Recruiting",
    "stellen" : "conferencing.html#Recruiting",
    "stellenausschreiben" : "conferencing.html#Recruiting",
    "homeoffice" : "conferencing.html#Recruiting",
    "bank" : "conferencing.html#Branchen",
    "banken" : "conferencing.html#Branchen",
    "bankwesen" : "conferencing.html#Branchen",
    "finanz" : "conferencing.html#Branchen",
    "finanzamt" : "conferencing.html#Branchen",
    "finanzsektor" : "conferencing.html#Branchen",
    "finanzwirtschaft" : "conferencing.html#Branchen",
    "polizei" : "conferencing.html#Branchen",
    "behörde" : "conferencing.html#Branchen",
    "behörden" : "conferencing.html#Branchen",
    "sparkassa" : "conferencing.html#Branchen",
    "aktien" : "conferencing.html#Branchen",
    "trend" : "online-beratung.html#trend",
    "realität" : "online-beratung.html#trend",
    "neu" : "online-beratung.html#trend",
    "digitalisierung" : "online-beratung.html#trend",
    "video" : "online-beratung.html#second_tile",
    "highlights online beratung" : "online-beratung.html#highlights",
    "highlights online-beratung" : "online-beratung.html#highlights",
    "highlights online" : "online-beratung.html#highlights",
    "sicherheit" : "online-beratung.html#sicherheit",
    "geprüft" : "online-beratung.html#sicherheit",
    "zertifikat" : "online-beratung.html#sicherheit",
    "zertifiziert" : "online-beratung.html#sicherheit",
    "opdv" : "online-beratung.html#sicherheit",
    "iso" : "online-beratung.html#sicherheit",
    "iec" : "online-beratung.html#sicherheit",
    "https" : "online-beratung.html#sicherheit",
    "verschlüsselung" : "online-beratung.html#sicherheit",
    "256-bit" : "online-beratung.html#sicherheit",
    "datenschutz" : "online-beratung.html#sicherheit",
    "http" : "online-beratung.html#sicherheit",
    "makler" : "online-beratung.html#branchen",
    "versicherungen" : "online-beratung.html#branchen",
    "mifid" : "online-beratung.html#branchen",
    "signatur" : "online-beratung.html#branchen",
    "schnellstart" : "online-beratung.html#branchen",
    "beratungsdokumentation" : "online-beratung.html#branchen",
    "dsgvo" : "online-beratung.html#Banken",
    "bankprodukte" : "online-beratung.html#Banken",
    "finanzprodukte" : "online-beratung.html#Banken",
    "immobilien" : "online-beratung.html#Immobilien",
    "architekt" : "online-beratung.html#Immobilien",
    "immobilienmakler" : "online-beratung.html#Immobilien",
    "rundgang" : "online-beratung.html#Immobilien",
    "grundrisse" : "online-beratung.html#Immobilien",
    "virtueller rundgang" : "online-beratung.html#Immobilien",
    "einzelhandel" : "online-beratung.html#Einzelhandel",
    "selbständig" : "online-beratung.html#Einzelhandel",
    "onlineshop" : "online-beratung.html#Einzelhandel",
    "freelancer" : "online-beratung.html#Einzelhandel",
    "klassisch" : "online-beratung.html#Einzelhandel",
    "gesund" : "online-beratung.html#Gesundheit",
    "gesundheit" : "online-beratung.html#Gesundheit",
    "arzt" : "online-beratung.html#Gesundheit",
    "doktor" : "online-beratung.html#Gesundheit",
    "krankenhaus" : "online-beratung.html#Gesundheit",
    "patient" : "online-beratung.html#Gesundheit",
    "patienten" : "online-beratung.html#Gesundheit",
    "arztpraxis" : "online-beratung.html#Gesundheit",
    "praxis" : "online-beratung.html#Gesundheit",
    "energie" : "online-beratung.html#Telekommunikation",
    "telekommunikation" : "online-beratung.html#Telekommunikation",
    "energiewende" : "online-beratung.html#Telekommunikation",
    "tele" : "online-beratung.html#Telekommunikation",
    "warum" : "warum.html",
    "umwelt" : "warum.html#umwelt",
    "co2" : "warum.html#umwelt",
    "leitlinien" : "warum.html#leitlinien",
    "vision" : "warum.html#leitlinien",
    "fairness" : "warum.html#leitlinien",
    "teamgeist" : "warum.html#leitlinien",
    "support" : "Kontakt.html",
    "hilfe" : "Kontakt.html",
    "faq" : "Kontakt.html",
    "kundendienst" : "Kontakt.html",
    "kontakt" : "Kontakt.html",
    "anliegen" : "Kontakt.html",
    "agb" : "AGB.html",
    "impressum" : "impressum.html",
    "partner" : "index.html#logos",
    "produkte" : "index.html#produkte",
    "individuelle beratung" : "Kontakt.html",
    "beratung" : "Kontakt.html",
    "home" : "index.html",
}

function search_trigger(){
    const search_bar = document.getElementById("mobile_search_bar");
    if(search_bar.classList.contains("hide")){
        search_bar.classList.remove("hide")
    }else{
        search_bar.classList.add("hide")
    }
}