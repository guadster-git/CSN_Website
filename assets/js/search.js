const searchbar = document.getElementById("search_bar")
const searchbar_mobile = document.getElementById("mobile-search-input")
const error_message = document.getElementById("error_message")
const mobile_error_message = document.getElementById("mobile_error")

const search_term_map = {}
let keys = null;

window.onload = function (){
    fetch('/search_index.txt')
        .then(response => response.text())
        .then(text => {

            let lines = text.split(",")
            for (let i = 0; i < lines.length; i++){
                let pair = lines[i].replace(/\s/g, "").split(":")
                search_term_map[pair[0]] = pair[1]
            }
            console.log(search_term_map)
            keys = Object.keys(search_term_map)
        })
}

searchbar.addEventListener("keydown", function (event){
    console.log("keydown triggered")
    if(event.key === "Enter"){
        search();
    }
})
searchbar_mobile.addEventListener("keydown", function (event){
    if(event.key === "Enter"){
        mobileSearch();
    }
})
searchbar.addEventListener("click", function (){
    error_message.classList.add("hide_error")
})
searchbar_mobile.addEventListener("click", function (){
    mobile_error_message.classList.add("hide_error")
})

function mobileSearch(){
    const to_search = document.getElementById("mobile-search-input");
    const close_menu = document.getElementById("mobile-menu")
    let to_search_formatted = to_search.value.split(' ').join('')
    to_search_formatted = to_search_formatted.replace(/[^a-zA-Z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]/g, "").toLowerCase()
    const matches = keys.filter(x => x.includes(to_search_formatted) || to_search_formatted.includes(x))
    if (matches.length > 0){
        close_menu.style.width = "0"
        window.location.href = search_term_map[matches[0]]
    }
    else if(to_search.value === "") {

    }
    else {
        mobile_error_message.classList.remove("hide_error")
    }
}

function search(){
    const to_search = document.getElementById("search_bar");
    let to_search_formatted = to_search.value.split(' ').join('')
    to_search_formatted = to_search_formatted.replace(/[^a-zA-Z\u00c4\u00e4\u00d6\u00f6\u00dc\u00fc\u00df]/g, "").toLowerCase()
    const matches = keys.filter(x => x.includes(to_search_formatted) || to_search_formatted.includes(x))
    if (matches.length > 0){
        window.location.href = search_term_map[matches[0]]
    }
    else if(to_search.value === "") {

    }
    else {
        error_message.classList.remove("hide_error")
    }

}

function search_trigger(){
    const search_bar = document.getElementById("mobile_search_bar");
    mobile_error_message.classList.add("hide_error")
    if(search_bar.classList.contains("hide")){
        search_bar.classList.remove("hide")
    }else{
        search_bar.classList.add("hide")
    }
}