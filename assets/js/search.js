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
    if (search_term_map.hasOwnProperty(to_search.value.toLowerCase())){
        close_menu.style.width = "0"
        window.location.href = search_term_map[to_search.value.toLowerCase()]
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
    if (search_term_map.hasOwnProperty(to_search.value.toLowerCase())){
        window.location.href = search_term_map[to_search.value.toLowerCase()]
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
    "video" : "online-beratung.html#highlights"
}

function search_trigger(){
    const search_bar = document.getElementById("mobile_search_bar");
    if(search_bar.classList.contains("hide")){
        search_bar.classList.remove("hide")
    }else{
        search_bar.classList.add("hide")
    }
}