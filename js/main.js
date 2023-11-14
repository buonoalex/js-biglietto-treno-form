// Questo è il file che contiene tutto il codice JS della pagina web

function LoginScreen(){

    document.getElementById("screenPrincipal").classList.add("d-none");


}

function ComproScreen(){

    document.getElementById("screenPrincipal").classList.add("d-none");

    document.getElementById("inputUtente").classList.remove("d-none");
    
}

function BigliettoCompletato(event){
    event.preventDefault();

    let kmpercorsi = parseInt(document.getElementById("inputKm").value);
    let email = document.getElementById("inputEmail").value;
    let choisePerson = document.getElementById("inputBiglietti").value;

    console.log("Input completati");
    console.log(choisePerson);

   

    //Switch età
    document.getElementById("selezionaetà").classList.remove("d-none");

    let controll1 = false;

    switch(choisePerson){
        
        case "1":
            document.getElementById("utente2").classList.add("d-none");
            document.getElementById("utente3").classList.add("d-none");
            controll1 = true;
            console.log("eseguito1");
            
        break;
        
        case "2":
            document.getElementById("utente3").classList.add("d-none");
            controll1 = true;
            console.log("eseguito2");
            
        break;

        case "3":
            controll1 = true;
            console.log("eseguito3");
        break;

        default:
            alert("Non hai inserito i numeri");
        break;

    }

    //Switch Prize
    if(controll1 == true){
        document.getElementById("bigliettiUtenti").classList.remove("d-none");
    }
    else{
        alert("dio");
    }
   



}
