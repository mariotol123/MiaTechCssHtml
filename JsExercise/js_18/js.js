let nome = "Mario";
let cognome = "Tolvo";
let eta = 27;
let citta = "Napoli";

console.log(`Il mio nome e' ${nome} e il mio cognome e' ${cognome}`);

console.log(`
    Il mio nome e' ${nome} e il mio cognome e' ${cognome}
    vivo a ${citta}
    e ho ${eta}
    `);



    let persona = {
        nome: "Alfonso",
        citta: "Milano",
        eta: 42,
        comune: "Milano"
    }


    function stampaPersona (p) {
        return `${p.nome}, ${p.citta}, ${p.eta}, ${p.comune}`
    };


    console.log(stampaPersona(persona))