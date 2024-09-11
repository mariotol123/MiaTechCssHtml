

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








//Promise 

function callPromise () {
    return new Promise((resolve,reject) => {

        let ok = false;

            if(ok){
                setTimeout(() => {
                    resolve("Promessa risolta");
                }, 2000)
            
        } else {
            reject("Promessa irrisolta");
        } 
        
    })
}


callPromise().then(
    (message) => {
    console.log(message);
})
    .catch(
        (errore) => {
            console.log(errore)
        }
    );



    function addition (a,b) {
        return new Promise((resolve,reject) => {
            let result = a + b;

            if(result == 3){
                resolve("La somma e' 3");
            } else {
                reject("La somma e' diversa da 3");
            }
        })
    }


    addition(2,2).then(
        (message) => {
            console.log(message);
        }
    )
        .catch(
            (error) => {
                console.log(error);
            }
        )
        .finally(
            console.log("Addition sta eseguendo...")
        )


