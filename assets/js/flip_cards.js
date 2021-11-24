const flip = document.querySelectorAll(".flip_inner");
const flip_container = document.getElementById("highlights");
let is_hovered = false;
let is_trigger_active = false;
let enable_flip = false;

flip.forEach(item => {
    item.addEventListener('mouseover', () => {
        is_hovered=true;
        console.log("hovered")
        flip.forEach(item =>{
            if (is_hovered)
                item.classList.remove("apply_flip");
        })
    })
})
flip.forEach(item => {
    item.addEventListener('mouseleave', () => {
        is_hovered=false;
        console.log("de-hovered")
    })
})

function trigger_cards (){
    if(is_trigger_active || !enable_flip)
        return;
    is_trigger_active = true;
    const random_number = Math.floor(Math.random() * 12);
    if(is_hovered){
        console.log("deny flip");
        is_trigger_active = false;
        return;
    }
    console.log(is_hovered);

    setTimeout(function () {
        if (is_hovered){
            is_trigger_active = false;
            return;
        }

        console.log("wants to flip")

        flip[random_number].classList.add("apply_flip");

        setTimeout(function () {
            flip[random_number].classList.remove("apply_flip");
            console.log("wants to remove")
            is_trigger_active = false;
            trigger_cards();
            console.log("jetzt rekursiv");

        }, 5000)

    }, 5000);
}

flip_container.addEventListener("mouseenter", function () {
    enable_flip= true;
    trigger_cards();
})
flip_container.addEventListener("mouseleave", function () {
    enable_flip= false;
})