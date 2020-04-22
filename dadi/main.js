//"Gioco dei dadi" PC vs. Human: chiedi un numero all'utente tra 1 e 6 (giocata human) e estrai un numero casuale tra 1 e 6 (giocata PC). Chi fa il numero più alto vince!
var number = prompt('Inserisci un numero tra 1 e 6');
var min = 1;
var max = 7;
var randomvariable = Math.floor(Math.random() * (+max - +min) + +min);



if (isNaN(number)) {
    alert('Non hai inserito un numero');

} else {
    if (number < 1 || number > 6) {
        alert('Devi inserire un numetro tra 1 e 6');
    } else {
        if (number > randomvariable) {
            alert('Hai vinto');
            document.writeln(randomvariable);

        } else if (number < randomvariable) {
            alert('Hai perso');
            document.writeln(randomvariable);
        } else if (number == randomvariable) {
            alert('Pareggio');
            document.writeln(randomvariable);
        }

    }

}
