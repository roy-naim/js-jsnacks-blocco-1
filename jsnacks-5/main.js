// Crea un array vuoto.
// Chiedi per 6 volte all’utente di inserire un numero, se è dispari inseriscilo nell’array.

var empty = []

for (var i = 0; i < 6; i++) {
 var number = parseInt(prompt("Inserisci un numero "));

 if (number%2 === 1) {
  empty.push(number);
 }
}
console.log(empty);
