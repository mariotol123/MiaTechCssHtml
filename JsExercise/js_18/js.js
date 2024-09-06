let nome = "Mario";
let cognome = "Tolvo";
let eta = 27;
let citta = "Napoli";

if(nome != "Vittorio"){
    console.error("Nome non valido")
}
if(nome != "Michele"){
    console.warn("Warning")
}

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


    console.log(stampaPersona(persona));


    let persone = [
        {
          nome: "Mario",
          cognome: "Rossi",
          età: 30
        },
        {
          nome: "Luisa",
          cognome: "Verdi",
          età: 25
        },
        {
          nome: "Giovanni",
          cognome: "Bianchi",
          età: 40
        }
      ];

      console.table(persone);



      console.group("Gruppo 1");
        console.log("Messaggio nel gruppo 1");
        console.log("Altro messaggio nel gruppo 1");