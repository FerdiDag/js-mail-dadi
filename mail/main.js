//"Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

var mail = prompt('Qual è il tuo indirizzo email?');
var listmail = ['ferdi.dagostino@gmail.com', 'pippofranco@gmail.com', 'peppe@gmail.com', 'mario@gmail.com', 'dario@gmail.com'];
if (mail.indexOf("@") === -1 || mail.indexOf(".") === -1) {
    alert('Deve contenere una @ o un .')
} else {
    for (var i = 0; i < listmail.length; i++) {

        if (mail == listmail[i]) {
            alert('Sei in lista');
        } else {
            document.writeln('Non sei in lista');
        }
    }
}




//
// } else if (mail == listmail[i]) {
//     alert('Sei in lista');
// } else {
//     alert('Non sei in lista');
// }
