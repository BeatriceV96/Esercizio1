/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/*--------------------------------------------------------RISPOSTA-------------------------------------------------------------------------*/

/*
In JS ci sono vari tipi di dati primitivi e sono:
1. LE STRINGHE ---> sono tipi di sequenze di caratteri delimitati da apici che possono essere singoli '' o doppi ""; non vi sono particolari regole a riguardo, l'importante è che ci si ricordi di aprirle e chiuderle sempre.
   E' possibile utilizzarli insieme, combinarli "''"; si può anche inserire un backslash indicato con la sintassi \n che indica un ritorno a capo
2. I NUMERI ---> possono essere interi i decimali (il punto sostituisce la virgola che separa il decimale) e negativi; si scrivono senza apici. NaN indica il not a number (valore numerico non definito)
3. BOOLEANS ---> di due tipi (true|false), vero e farlo, di carattere logico
4. OGGETTI ---> vengono utilizzti per memorizzare dei dati (non fa parte dei dati primitivi), è indicatoper strutture più complesse.
5. NULL ---> non rientra nei precedenti tipi di dato, indica un valore nullo o inesistente, diverso quindi da zero o da una stringa vuota
6. UNDEFINED ---> Prevede un solo valore pissibile: undefined, valore cioè non assegnato; ad esempio se una variabile viene dichiarata, ma non assegnata, il suo valore sarà undefined.
7. SYMBOL ---> utilizzato come indentificatore per le proprietà di un oggetto. 
8. OPERATORI---> Tramite essi posso combinare più valori fra loro
9. FUNZIONI --> servono per eseguire un blocco di codice specifico
*/

/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* ------------------------------------------------------------SCRIVI QUI LA TUA RISPOSTA ------------------------------------------------------*/


var myName = "Beatrice"

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* ------------------------------------------------------------SCRIVI QUI LA TUA RISPOSTA ------------------------------------------------------*/


var somma = 12 + 20;
  console.logo(risultato);


/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/*-------------------------------------------------------------- SCRIVI QUI LA TUA RISPOSTA -----------------------------------*/
//

var x = 12;
oppure
let = 12
</script>


/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/*----------------------------------------------------- SCRIVI QUI LA TUA RISPOSTA------------------------------------------- */

const myName = "Vanvitelli";
myName = "Beatrice";
NB: const ----> per regola il valore assegnato non è modificabile, il valore myName è già stato assegnato ed è univoco, di conseguenza genererà un ErrorEvent. 


/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* -----------------------------------------------------------------SCRIVI QUI LA TUA RISPOSTA------------------------------------------- */

x = 12;
y = x - 4;

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* ------------------------------------------SCRIVI QUI LA TUA RISPOSTA ------------------------------------------*/


var name1 = "john"
var name2 = "John"

var sonoDiversi = name1 !== name2;
console.log(name1 !== name2)

var name1Lower = name1.toLowerCase();
var name2Lower = name2.toLowerCase();
var sonoUguali = name1Lower === name2Lower;
console.log(sonoUgualiDopoLowerCase);


