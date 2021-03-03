// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby
// chiedi all’utente il suo nome e
// comunicagli se può partecipare o no alla festa.

var names = ["Leonardo", "Alan", "Janet", "Buba", "Avigail"]

var my_name = prompt("Welcome to Gatsby gala. What's your name?");
var flag = false;
for (var i = 0; i < names.length; i++) {
  if  (names[i] == my_name) {
    flag = true
  }
}
//flag is something that u can stop the loop after u've writtern ur mail
if (flag) {
  console.log("You're invited.")
}else {
  console.log("Sorry, you're not invited for the Gatsby gala.")
}
