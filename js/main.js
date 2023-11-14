// Questo è il file che contiene tutto il codice JS della pagina web

function LoginScreen(){

    document.getElementById("screenPrincipal").classList.add("d-none");

    document.getElementById("inputUtente").classList.add("d-none");

}

function ComproScreen(){

    document.getElementById("screenPrincipal").classList.add("d-none");

    document.getElementById("LoginScreen").classList.add("d-none");
    
}

function BigliettoCompletato(event){
    event.preventDefault();

    let kmpercorsi = parseInt(document.getElementById("inputKm").value);
    let email = document.getElementById("inputEmail").value;
    let choisePerson = document.getElementById("inputBiglietti").value;

    console.log("Input completati");

    
}
