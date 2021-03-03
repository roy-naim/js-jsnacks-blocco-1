// Chiedi un numero di 4 cifre all’utente e calcola la somma
// di tutte le cifre che compongono il numero.
var somma = 0;

var cifre = prompt("Dammi un numero con 4 cifre");

Array.from(cifre); //da stringa ad array ~ trasformazione
for (var i = 0; i < cifre.length; i++) { //length perche' prende la lunghezza array
  somma = somma + parseInt(cifre[i]);
}
console.log(somma);
