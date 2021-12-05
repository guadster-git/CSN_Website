

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
    Vorname: ${vorname.value} \r\n
    Nachname: ${nachname.value}\r\n
    E-Mail: ${email.value}\r\n
    Telefon: ${telefon.value}\r\n
    Firma: ${firma.value}\r\n
    Land: ${land.value}\r\n
    Ihre Nachricht: ${nachricht.value}\r\n
    `

    document.location.href = `mailto:info@csn.de?subject=${subject}&body=${email_body}`;



}