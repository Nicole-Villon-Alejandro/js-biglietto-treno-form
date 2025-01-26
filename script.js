/*Scrivere un programma che chieda all’utente:
- Il numero di chilometri da percorrere
- Età del passeggero
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console.
MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo.
Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca.
MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.
Nota:
Se non vi sentite particolarmente creativi, questa potrebbe essere un’implementazione da seguire per il secondo milestone. Potete scegliere di implementare una soluzione completamente diversa oppure simile, ma in ogni caso cercate di farla vostra.*/


function calcolaPrezzo(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const chilometri = parseFloat(document.getElementById('chilometri').value);
    const eta = document.getElementById('eta').value;

    if (!nome || isNaN(chilometri) || chilometri <= 0) {
        alert('Per favore, inserisci valori validi.');
        return;
    }

    const prezzoPerKm = 0.21;
    let prezzoTotale = chilometri * prezzoPerKm;
    let offerta = 'Biglietto Standard';

    if (eta === 'minorenne') {
        prezzoTotale *= 0.8; // Sconto 20%
        offerta = 'Sconto Minorenni';
    } else if (eta === 'over65') {
        prezzoTotale *= 0.6; // Sconto 40%
        offerta = 'Sconto Over 65';
    }

    const carrozza = Math.floor(Math.random() * 10) + 1;
    const codiceCp = Math.floor(Math.random() * 90000) + 10000;

    document.getElementById('output-nome').textContent = nome;
    document.getElementById('output-offerta').textContent = offerta;
    document.getElementById('output-carrozza').textContent = carrozza;
    document.getElementById('output-codice').textContent = codiceCp;
    document.getElementById('output-prezzo').textContent = `€${prezzoTotale.toFixed(2)}`;

    const outputElement = document.getElementById('output');
    outputElement.classList.remove('hidden');
}