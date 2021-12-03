const searchbar = document.getElementById("search_bar")
searchbar.addEventListener("keydown", function (event){
    if(event.key === "Enter"){
        search();
    }
})

function search(){
    const to_search = document.getElementById("search_bar");
    window.location.href = search_term_map[to_search.value.toLowerCase()]
}

const search_term_map = {
    "telefon" : "conferencing.html#Telefonkonferenzen",
    "audio" : "conferencing.html#Telefonkonferenzen",
    "video" : "online-beratung.html#highlights"
}