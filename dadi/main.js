//"Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!
var number = prompt('Inserisci un numero tra 1 e 6');
var randomvariable = Math.floor(Math.random() * 6);
console.log(randomvariable);

if (isNaN(number)) {
    alert('Non hai inserito un numero')
} else {
    if (number > randomvariable) {
        alert('Hai vinto');

    } else if (number < randomvariable) {
        alert('Hai perso');
    } else {
        alert('Pareggio');
    }
}
