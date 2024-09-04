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


let arrayNumbers3 = [3,4,5,6,7,8];

let [tre,quattro, ...resto] = arrayNumbers3;

console.log(tre);
console.log(quattro);
console.log(resto);


let persona = {
    nome: "Mimmo",
    cognome: "Napolitano",
    citta: "Milano",
    provincia: "Milano"
}


let {nome,cognome, ...propieta} = persona;

console.log(nome);
console.log(cognome);
console.log(propieta);