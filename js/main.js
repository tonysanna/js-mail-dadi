// generare un numero9 random da 1 a 6

var giocatore = Math.floor(Math.random() *6) + 1;
console.log('Valore giocatore:' + giocatore);

var computer = Math.floor(Math.random() *6) + 1;
console.log('Valore computer:' + computer);

if (giocatore > computer)
{
    console.log('Vince il giocatore')
}
else if (computer > giocatore)
{
    console.log('vince il pc')
}
else
{
    console.log('partita patta')
}

//chiedi all'utente la sua email,

var email_utente = prompt('inserisci la tua email');
console.log(email_utente);


//controlla che stia nella lista (posso tradurlo con array)
var mail_trovata = false
var emails = ['tony@gmail.com', 'alessandro@gmail.com', 'davide@SpeechGrammarList.com'];

for (var i = 0; i < emails.length; i++)
{
    var listMail = emails[i];
    
    if (listMail == email_utente)
    {
        mail_trovata = true;
    }
}


if ( mail_trovata == true)
{
    console.log('puoi entrare!');
}
else {
    console.log('non puoi entrare');
}

