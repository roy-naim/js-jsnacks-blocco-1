// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

var first_word = prompt("Dammi una parola").trim();

var second_word = prompt("Another one").trim();

console.log(first_word);
console.log(second_word);

if (first_word.length > second_word.length) {
  console.log(second_word, first_word);
} else {
  console.log(first_word, second_word);
}
