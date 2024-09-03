let numbers = [1,2];

let [numeroUno, numeroDue] = numbers;

console.log(numeroUno);
console.log(numeroDue);


let numbers2 = [1,2,3];

let [uno, , tre] = numbers2;

console.log(uno);
console.log(tre);


let mario = ["Mario", "Rossi", "Panettiere"];

let [nome, cognome, mansione, eta = 25, citta = "Napoli"] = mario;

console.log(nome);
console.log(cognome);
console.log(mansione);
console.log(eta);
console.log(citta);


let obj = {
    sesso: "M",
    professione: "Tolvo",
};

let {sesso, professione, classe = "5c", scuola = "Sbordone"} = obj


console.log(sesso);
console.log(cognome);
console.log(classe);
console.log(scuola);


const { sesso: sessoPersona, professione: professionePersona } = obj;


console.log(sessoPersona);