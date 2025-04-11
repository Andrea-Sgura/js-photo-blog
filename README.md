# js-photo-blog
Ciao ragazzi, esercizio di oggi: Photo Blog
repo: js-photo-blog
CONSEGNA
Milestone 1
Sfruttando gli screen e gli asset in allegato riproduciamo la grafica proposta in maniera statica: utilizzando soltanto HTML e CSS e riproducendo una singola fotografia (usiamo una qualunque immagine a piacimento)
Milestone 2
Utilizzando Postman, testiamo una chiamata a questo endpoint:
https://lanciweb.github.io/demo/api/pictures/
Studiamo bene la risposta e i dati che ci fornisce iniziando a pensare a come poterli sfruttare.
Milestone 3
Inseriamo un foglio JavaScript ed effettuiamo una chiamata AJAX all’API, sfruttando la risposta per generare dinamicamente in pagina una serie di foto!
Font utilizzati:
titoli: ‘Edu Tas Beginner’, sans-serif;
date: ‘Sometype Mono’, ‘monospace’;
(Dovreste sapere a questo punto cosa e come prendere da Google Fonts… :occhiolino:)
Bonus
rendi la pagina responsive, in modo che su mobile e tablet le foto si dispongano man mano una sotto l’altra ed il titolo abbia una dimensione adeguata
Note
Non siete obbligati a usare Bootstrap: siete liberi di decidere come gestire lo stile :faccia_leggermente_sorridente:
Buon Lavoro e buon divertimento!

REALIZZAZIONE ESERCIZIO
Milestone 1:
- CREO LA STRUTTURA HTML CHE CONTENGA UNA SINGOLA FOTO
- STILIZZO LA PAGINA UTILIZZANDO CSS/BOOTSTRAP 
- AGGIUNGO LE ALTRE CARD ALLA STRUTTURA

Bonus:
- RENDO LA PAGINA RESPONSIVE PER TUTTI I TIPI DI DISPOSITIVI

Milestone 2:
- Eseguo con Postman una chiamata a questo endpoint: https://lanciweb.github.io/demo/api/pictures/
- La risposta è un array di oggetti con id, titolo, data e url
- Essendo un array di oggetti, posso sostituire le card statiche create in precedenza con questo contenuto.

Milestone 3:
- Collego Axios via CDN nell'head di HTML
- Effettuo una chiamata AJAX all'API con Axios dove richiamo le card.
- Ricreo la struttura delle card all'interno di un forEach.

_______________________________________________________________

Ciao ragazzi, esercizio di oggi: Photo Blog
repo: js-photo-blog (la stessa di ieri)
CONSEGNA
Milestone 1
Facciamo in modo di creare un overlay che copra l’intera pagina e all’interno, centrata, disponiamo un’immagine qualunque ed un button di chiusura.
Milestone 2
Facciamo sparire l’overlay con l’aiuto di una classe CSS che imposti il display: none .
Dopodiché facciamo sì che cliccando una qualunque foto. L’overlay ricompaia.
Cliccando invece il button di chiusura, l’overlay scompare nuovamente.
Milestone 3
Inseriamo il pezzo di logica finale: quando una foto viene cliccata, dobbiamo fare in modo che sia proprio quella foto a essere mostrata all’interno dell’overlay.
Ci sono diversi modi di farlo, prova a sperimentare :faccia_leggermente_sorridente:
Bonus
Spostandosi col mouse sopra le foto, queste si zoommano, ruotano di 10 gradi e la loro ombra aumenta, il tutto in manierà fluida. Inoltre il mouse diventa un puntatore, per far capire all’utente che può cliccare

REALIZZAZIONE ESERCIZIO

Milestone 1:
- Inserisco nell'HTML un nuovo div che conterrà l'overlay con un immagine randomica all'interno e un pulsante di chiusura.
- Inserisco nel CSS le proprietà per far si che compaia nel giusto modo l'overlay con il button "Chiudi".

Milestone 2:
- Con la classe hidden imposto il display none in modo che mi nasconda l'overlay
- Con JS inserisco evento di "click" dove appare e scompare l'overlay

Milestone 3:
- All'interno del ciclo forEach inserisco l'evento di "click" e collego l'immagine da visualizzare all'overlay tramite l'src
