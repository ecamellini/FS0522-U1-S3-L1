
// Illustriamo i modi di fare output in JS

/* Primo modo di produrre output in JS:
chiedere al browser di visualizzare un popup.
Non vado a manipolare l'HTML in nessun modo. */
alert("Hello World!")

/* Secondo modo di produrre output in JS:
scrivo sulla Console. Quello che viene scritto
sulla console è solo per gli sviluppatori, l'utente
non la vede */
console.log("Hello World! Hello Console!")

/* Terzo modo di produrre output in JS:
Scrivo qualcosa nel documento, cioè nella pagina web.
Nel DOM: oggetto web (document object model).
WARNING: document write è pericoloso - perché se viene
chiamato DOPO che la pagina è stata renderizzata
sovrascrive tutto il contenuto del body. */
document.write("Hello World! Ciao a tutti gli utenti!")

/* Quarto modo di produrre output in JS:
Vado ad agire direttamente su uno o più tag HTML.
Ad esempio, prendo un tag ESISTENTE tramite il suo ID,
e vado a scriverci qualcosa dentro. In questo modo sto
sovrascrivendo l'HTML all'interno di questo tag. */
document.getElementById("output-di-esempio").innerHTML = "<ul><li>Ciao</li><li>Ciao2</li></ul>"


/* Potenzialmente posso anche andare a modificare lo stile
di un elemento. */
document.getElementById("output-di-esempio").style.color = "red"

// Se eseguiamo questa riga sotto, dà un errore in console, e il JavaScript si ferma.
// Infatti non vedrò l'ultimo console log di questo file.
// document.getElementById("ciaociao").innerHTML = "test"

console.log("Il mio JavaScript ha finito di eseguire!")
