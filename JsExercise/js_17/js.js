let array = [1,2,3,4];

let newArray = [...array];

console.log(array);
console.log(newArray);

array = [10,20,30];

console.log(array);
console.log(newArray);



let arrayNumbers = [100,200,300];
let arrayNumbers2 = [500,600,700];


let joinArray = [...arrayNumbers,...arrayNumbers2];
console.log(joinArray);



let obj = {
    nome: "Mario",
    cognome: "Tolvo"
}

let newObj = {...obj, eta: 26};

console.log(obj);
console.log(newObj);






function somma (...altriNumeri){
    
    let somma = 0;

    altriNumeri.forEach(element => {
        
        somma += element;

    });

    return somma;

}

console.log(somma(2,3,6,7,8,9));