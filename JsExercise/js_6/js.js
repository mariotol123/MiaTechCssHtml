let score = parseInt(prompt("Inserire un numero"));

// if(score >= 90 && score <= 100){
//     console.log("voto ottimo");
// } else if(score >= 70 && score <= 89){
//     console.log("voto buono");
// } else if (score >= 60 && score <= 69){
//     console.log("voto sufficiente");
// } else if (score <= 59){
//     console.log("voto insufficiente");
// } else {
//     console.log("punteggio non valido");
// }



switch(true){

    case isNaN(score):
        console.log("voto non valido");
        break;  

    case score >= 90 && score <= 100:
    console.log("Voto Ottimo");
    break;

    case score >= 70 && score <= 89:
        console.log("Voto buono");
        break;

    case score >= 60 && score <= 69:
        console.log("Voto sufficiente");
        break;

    case score <= 59:
        console.log("Voto insufficiente");
        break;  
}