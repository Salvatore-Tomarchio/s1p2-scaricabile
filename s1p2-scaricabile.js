/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

I principali datatype in JavaScript sono: stringhe, numeri, booleani, array, oggetti, null e undefined. 
Stringhe: sono segnati con degli apici che sono o doppi("") o singoli('') e hanno valore di testo.
Numeri: ci possono essere numeri interi(num) e numeri decimale(price), ci sono valori speciali come +infinity, -infinity e NaN(Not a Number).
Booleani: e una semplice riflessione logica, che mi fornisce una soluzione che può essere vera o falsa.
Array: e una lista di dati e può contenere insiemi di variabili.
Oggetti: sono l\'unione di più valori.
Null è una variabile vuota o è stata svuotata.
Undefined è una variabile che è stata definita ma non è stato assegnato alcun valore.

/* ESERCIZIO 2
 Descrivi cos'è un oggetto in JavaScript, con parole tue.
*/

L\'oggetto in JavaScript a delle proprietà e dei valori quest\'\unione si chiama chiave-valore 

/* ESERCIZIO 3
 Scriti il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

//Definisco i numeri
let numero1 = 12;
let numero2 = 20;

//Eseguo la somma
let risultato = numero1 + numero2;

//Il risultato
console.log("La somma di " + numero1 + " e " + numero2 + " è: " + risultato)

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

let x = 12 

/* ESERCIZIO 5
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

let name = "Salvo" 

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

let x = 12

let sottrazione = x - 4;

console.log("Il risultato della sottrazione è: " + sottrazione)

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 Infine, verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
 NON HAI BISOGNO DI UN BLOCCO IF/ELSE. E' sufficiente utilizzare console.log().
*/

 let name1 = "john";
let name2 = "John";

let verifica = (name1 !== name2);

console.log("name1 e name2 sono diversi: " + verifica)

let uguaglianza = (name1.toLowerCase() == name2.toLowerCase());

console.log("name1 e name2 sono uguali: " + uguaglianza);
