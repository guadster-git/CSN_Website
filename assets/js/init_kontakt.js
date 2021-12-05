

window.onload = function (){
    if(sessionStorage.getItem("init")!== null){
        const produkte = document.getElementById("produkt_dropdown");
        const anliegen = document.getElementById("anliegen_dropdown");
        const nachricht = document.getElementById("nachrichtenbox");

        produkte.value= sessionStorage.getItem("produkt")
        anliegen.value = sessionStorage.getItem("anliegen")
        nachricht.value = sessionStorage.getItem("nachricht")
        sessionStorage.clear();
    }
}

function mailto(){


    const produkte = document.getElementById("produkt_dropdown");
    const anliegen = document.getElementById("anliegen_dropdown");
    const nachricht = document.getElementById("nachrichtenbox");
    const vorname = document.getElementById("input_vorname");
    const nachname = document.getElementById("input_nachname");
    const email = document.getElementById("input_email");
    const telefon = document.getElementById("input_telefon");
    const firma = document.getElementById("input_firma");
    const land = document.getElementById("input_land");

    const subject = produkte.value + " " + anliegen.value

    const email_body =
        `
    Vorname: ${vorname.value}%0D%0A
    Nachname: ${nachname.value}%0D%0A
    E-Mail: ${email.value}%0D%0A
    Telefon: ${telefon.value}%0D%0A
    Firma: ${firma.value}%0D%0A
    Land: ${land.value}%0D%0A %0D%0A
    Ihre Nachricht: ${nachricht.value}%0D%0A
    `

    document.location.href = `mailto:info@csn.de?subject=${subject}&body=${email_body}`;



}