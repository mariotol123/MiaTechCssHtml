

    document.write("Contiamo i secondi: </br>");
    let intervalId = setInterval(function () {
        document.body.innerHTML += ("Sono passati 2 secondi</br>");
    }, 2000);



    setTimeout(function () {

        clearInterval(intervalId);

        document.body.innerHTML += ("Intervallo stoppato dopo 10 secondi")

    }, 10000);