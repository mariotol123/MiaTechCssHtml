

function callbackSomma (a,b,callback){

    const result = a + b;
    console.log(result);

    callback(result); //Grazie alla callBack possiamo risalire al parametro RESULT anche al di fuori della funzione principale.
}

function stampaSomma (result,callback) {
    console.log("Callback eseguita con questo risultato", result);

    const div = result / 2;

    callback(div)
}

callbackSomma(2,5,function (result) {

    stampaSomma(result,function(final){
        console.log("Operazione finale con risultato", final);
    });
});





//CallBack annidato


