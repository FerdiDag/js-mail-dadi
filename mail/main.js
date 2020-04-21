//"Sono in lista?" Chiedi all'utente la sua email controlla che sia nella lista di chi può accedere (ergo: la mail è presente in un array contenente le email "autorizzate") e stampa un messaggio appropriato (sei in lista/non sei in lista)

var mail = prompt ('Qual è il tuo indirizzo email?');

var listmail = ['ferdi.dagostino@gmail.com', 'pippofranco@gmail.com', 'peppe@gmail.com',];

console.log (listmail);

if (mail == listmail[0]) {
    alert ('Sei in lista');
} else {
    alert ('Non sei in lista');
}
