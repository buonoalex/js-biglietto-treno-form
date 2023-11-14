// Questo è il file che contiene tutto il codice JS della pagina web

function LoginScreen(){

    document.getElementById("screenPrincipal").classList.add("d-none");

    document.getElementById("LoginScreen").classList.remove("d-none");

    document.getElementById("inputUtente").classList.add("d-none");

    document.getElementById("bigliettiUtenti").classList.add("d-none");

    document.getElementById("selezionaetà").classList.add("d-none");
}

function ComproScreen(){

    document.getElementById("screenPrincipal").classList.add("d-none");

    document.getElementById("LoginScreen").classList.add("d-none");

    document.getElementById("inputUtente").classList.remove("d-none");
    
}

function BigliettoCompletato(){

    let kmpercorsi = parseInt(document.getElementById("inputKm").value);
    let email = document.getElementById("inputEmail").value;
    let choisePerson = document.getElementById("inputBiglietti").value;

    console.log("Input completati");
    console.log(choisePerson);

    //Switch età

    switch(choisePerson){
        
        case "1":
            document.getElementById("utente2").classList.add("d-none");
            document.getElementById("utente3").classList.add("d-none");
            document.getElementById("selezionaetà").classList.remove("d-none");
            console.log("eseguito1");
            
        break;
        
        case "2":
            document.getElementById("utente3").classList.add("d-none");
            document.getElementById("selezionaetà").classList.remove("d-none");
            console.log("eseguito2");
            
        break;

        case "3":
            document.getElementById("selezionaetà").classList.remove("d-none");
            console.log("eseguito3");
        break;

        default:
            alert("Non hai inserito i numeri");
        break;

    }

    return { persone: choisePerson ,emailutente: email,kmeffettuati: kmpercorsi};

}


function VistaBiglietti(){


    let risulati = BigliettoCompletato();

    let personeBiglietto = risulati.persone;
    let kmPersonaBiglietto = risulati.kmeffettuati;
    let emailBiglietto = risulati.emailutente;

    let etapersona1 = document.getElementById("etaUtente1").value;
    let etapersona2 = document.getElementById("etaUtente2").value;
    let etapersona3 = document.getElementById("etaUtente3").value;

    console.log("Eta confermate");
    console.log(personeBiglietto);

    switch(personeBiglietto){
        case "1":
            document.getElementById("utentePrezzo2").classList.add("d-none");
            document.getElementById("utentePrezzo3").classList.add("d-none");
            document.getElementById("bigliettiUtenti").classList.remove("d-none");

            let numberCarrozzo1 = Math.floor(Math.random()*11)+1;
            let numberPosto1 = Math.floor(Math.random()*51)+1
            let numberIdBiglietto1 = Math.floor(Math.random()*10001)+1
            let prezzo1 = CalcoloPrize(etapersona1 , kmPersonaBiglietto);

            document.getElementById("postolUtente1").innerHTML = numberPosto1;
            document.getElementById("carrozzalUtente1").innerHTML = numberCarrozzo1;
            document.getElementById("idBigliettoUtente1").innerHTML = numberIdBiglietto1;
            document.getElementById("emailUtente1").innerHTML = emailBiglietto;
            document.getElementById("prezzoUtente1").innerHTML = prezzo1;

            console.log("Eseguito prize 1");
        break;

        case "2":
            document.getElementById("utentePrezzo3").classList.add("d-none");
            document.getElementById("bigliettiUtenti").classList.remove("d-none");

            let numberCarrozzo2 = Math.floor(Math.random()*11)+1;
            let numberPosto2 = Math.floor(Math.random()*51)+1
            let numberIdBiglietto2 = Math.floor(Math.random()*10001)+1
            let prezzo2 = CalcoloPrize(etapersona2 , kmPersonaBiglietto);

            document.getElementById("postolUtente2").innerHTML = numberPosto2;
            document.getElementById("carrozzalUtente2").innerHTML = numberCarrozzo2;
            document.getElementById("idBigliettoUtente2").innerHTML = numberIdBiglietto2;
            document.getElementById("emailUtente2").innerHTML = emailBiglietto;
            document.getElementById("prezzoUtente2").innerHTML = prezzo2;

            console.log("Eseguito prize 2");
        break;

        case "3":
            document.getElementById("bigliettiUtenti").classList.remove("d-none");
            console.log("Eseguito prize 3");
        break;

    }
}

function CalcoloPrize(etaPerson , kmfatti){
    const km = 0.21;
    let result;
    if(etaPerson <18){
        result = (kmfatti * 20) / 100;
    }else if(etaPerson>65){
        result = (kmfatti * 40) / 100;
    }else{
        result = kmfatti * km;
    }
    return result;
}
