/* Chiedi all’utente la sua email controlla che sia nella lista di chi può accedere e stampa un 
messaggio appropriato; */

var emails, email, msg;
emails = ["email1@gmail.com", "email2@gmail.com", "email3@gmail.com"];
email = prompt("Inserisci la tua email");
msg = "Non puoi accedere!";
for (var i = 0; i < emails.length; ++i) 
    if (email === emails[i]) 
    {
        msg = "Puoi accedere!";
        break;
    }
document.getElementsByClassName("msg")[0].textContent = msg;