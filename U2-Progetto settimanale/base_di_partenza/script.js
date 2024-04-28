

//-----------------CAMBIO COLORE HEADER----------------------------------------//

window.addEventListener('scroll', function() {
    // Selezioniamo l'header e il main dal documento
    var header = document.querySelector('header');
    var main = document.querySelector('main');

    // Calcoliamo l'altezza dell'header, l'offset superiore del main e l'altezza del main
    var headerHeight = header.offsetHeight;
    var mainOffsetTop = main.offsetTop;
    var mainHeight = main.offsetHeight;

    // Calcoliamo il punto in cui il main finisce
    var mainBottom = mainOffsetTop + mainHeight - headerHeight;

    // Se lo scroll supera il punto in cui il main finisce, cambiamo il colore dell'header
    if (window.scrollY > mainBottom) {
        header.classList.add('cambiaColore'); // Aggiungiamo la classe cambiaColore all'header
    } else {
        header.classList.remove('cambiaColore'); // Rimuoviamo la classe cambiaColore dall'header
    }
});

//-----------------------------ANIMAZIONE LOGO------------------------------------------------//

