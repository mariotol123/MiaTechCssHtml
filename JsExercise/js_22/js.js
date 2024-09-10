

function callbackSomma (a,b,callback){

    const result = a + b;
    console.log(result);

    callback(result); //Grazie alla callBack possiamo risalire al parametro RESULT anche al di fuori della funzione principale.
}

function stampaSomma (result) {
    console.log("Callback eseguita con questo risultato", result);
}

callbackSomma(2,5,stampaSomma);
