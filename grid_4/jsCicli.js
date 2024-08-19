//  let array = [1,2,3,4,5];

// // for(let i = 0; i < array.length; i++){
// //     console.log(array[i]);
// // }

// let i = 0;

// // while(i < array.length){
// //      console.log(array[i])
// //      i++;
// // }


// let p = 0;

// do {
//      console.log("Sono all'inizio");

//      i++;

// } while(i < 5)


// let Obj = {
//     name : "Mario",
//     lastName : "Tolvo",
//     age : 27,
//     city : "Naples",
//     address : {
//         via : "Via nuova",
//         cap : 80136
//     },

// }    

// // For in per iterare oggetti

// for(key in Obj){
//     console.log(key + ": " + Obj[key])
// }

// For off iterare per array o stringhe

// for()


// for each, .map e uno switch case (voti di laurea es da 0 a 50 insiffuciente).


// let fruits = ["apple", "mela", "banana", "kiwi"];

// fruits.forEach(element => {
//     console.log(element);
// });


// let city = ['Milano', 'Napoli', 'Roma'];

// let newCity = city.map(function(citys){
    
//     return console.log(citys + ", IT");
// });


// let votoLaurea = 50;

// switch (true) {
//     case votoLaurea >= 0 && votoLaurea <= 50:
//         console.log("Voto insufficiente");
//         break;
//     case votoLaurea > 50 && votoLaurea <= 70:
//         console.log("Voto sufficiente");
//         break;
//     case votoLaurea > 70 && votoLaurea <= 90:
//         console.log("Buon voto");
//         break;
//     case votoLaurea > 90 && votoLaurea <= 110:
//         console.log("Ottimo voto");
//         break;
//     case votoLaurea > 110 && votoLaurea <= 110:
//         console.log("Lodevole");
//         break;
//     default:
//         console.log("Voto non valido");
// }

// const people = [
//     {
//       name: "Mario",
//       age: 30,
//       job: "Developer"
//     },
//     {
//       name: "Luca",
//       age: 25,
//       job: "Designer"
//     },
//     {
//       name: "Anna",
//       age: 28,
//       job: "Manager"
//     }
//   ];


//   people.map(person =>{
//     console.log(`Name : ${person.name} ${person.age} ${person.job}`);
//   });


// //   ARRAY METHODS

// let numbers = [1,2,3,4];

// numbers.push(5);

// console.log(numbers);

// let person = {
//     name : "Francesco",
//     age : 34,
//     job : "Developer"
// }

// // Aggiunge un nuovo elemento
// people.push(person);

// console.log(people);

// // Elimina ultimo elemento
// numbers.pop();

// console.log(numbers);

// // Elimina il primo elemento
// numbers.shift();
// console.log(numbers);

// // Aggiunge primo elemento
// numbers.unshift(6);
// console.log(numbers);


// let numbersResult = numbers.map(number => number * 2);
// console.log(numbersResult);

// let evens = numbers.filter(number => number % 2 == 0);
// console.log(evens);

// let peopleAge = people.filter(person => person.age > 25);
// console.log(peopleAge);

// let sum = numbers.reduce((acc,curr) => acc + curr , 0);
// console.log(sum);


// // Mi trova il primo valore e si ferma
// let firstEven = numbers.find(number => number % 2 == 0);
// console.log(firstEven);

// // Trova l'indice del primo valore pari
// let firstIndex = numbers.findIndex(number => number % 2 == 0);
// console.log(firstIndex);


// const people = [
//   { name: "Mario", age: 30, job: "Developer" },
//   { name: "Luca", age: 22, job: "Designer" },
//   { name: "Anna", age: 28, job: "Developer" },
//   { name: "Sara", age: 24, job: "Manager" },
//   { name: "Giulia", age: 35, job: "Developer" }
// ];

// let peopleAgeAndDev = people.filter(people => people.age > 25 && people.job === "Developer");

// console.log(peopleAgeAndDev);


// let students = ["Marco", "Elena", "Giulia"];
// let newStudents = ["Alessandro", "Francesca", "Luca"];

// for(let i = 0; i < newStudents.length; i++ ){
//   students.push(newStudents[i]);
// }

// console.log(students);


// const products = [
//   { name: "laptop", price: 1000 },
//   { name: "phone", price: 500 },
//   { name: "tablet", price: 300 }
// ];

// let newProducts = products.map(productss => {

//     let newPrice = productss.price * 1.10;
//     console.log(`Product name : ${productss.name.toUpperCase()}, New Price : ${newPrice}`);

// });


// // FUNZIONI

// function saluta (nome){

//   return `Ciao ${nome}`
// };

// console.log(saluta("Mario"));


// // ARROW FUNCTION

// // const saluta = (nome) => {return `Ciao ${nome}`};




// const products2 = [
//   { name: "laptop", price: 1000 },
//   { name: "phone", price: 500 },
//   { name: "tablet", price: 300 }
// ];


// function transformProducts (prodotti){

//   return prodotti.map(prod => {
//     return {
//       name : prod.name.toUpperCase(),
//       price : prod.price * 1.5
//     }
//   })
// };

// const newProduct = transformProducts(products2);

// console.log(newProduct);


// let personnnn = {
//   name : "Mario",
//   age : 27
// };

// personnnn.name = "Marco"
// personnnn["age"] = 30;

// console.log(personnnn.age);

// let personKey = Object.keys(personnnn);
// console.log(personKey);

// let personEntries = Object.entries(personnnn);
// console.log(personEntries);



// // Mi unisce due oggetti

// const target = {a : 1};
// const source = {b : 2, c : 3};

// const result = Object.assign(target, source);
// console.log(result);



// // Destrutturato un oggetto

// const person = {
//   name : "Luca",
//   age : 40,
//   work : "Developer"
// };

// const {age, ...pippo} = person;
// console.log(age, pippo);


// const persona = {
//   nome: 'Giulia',
//   età: 28,
//   email: 'giulia@example.com'
// }

// function personBoh (pippo){
//   const {età, ...pluto} = pippo;
//   const {nome, ...paperino} = pippo;
//   console.log(nome, paperino)
//   console.log(età, pluto);
// }

// personBoh(persona);


// // --------------------- CLASSI JS ------------------

// class Person {
//   #nome; 
//   #eta;

//   constructor (nome,eta) {
//     this.#nome = nome;
//     this.#eta = eta;
//   }

//  saluta(){
//   console.log(`Ciao sono ${this.#nome} e ho ${this.#eta} anni`);
//  }

// }

// const persons = new Person("Mario", 27);
// console.log(persons);
// persons.saluta();


// class Student extends Person {
  
//   corso;

//   constructor(nome, eta, corso){
//     super (nome, eta);
//     this.corso = corso;
//   }


// }

// const student = new Student ("Mario", 27, "Informatica");
// student.saluta();

// console.log(student);



class Impiegato {
  nome;
  ruolo;
  stipendio;

  constructor(nome, ruolo, stipendio){
    this.nome = nome;
    this.ruolo = ruolo;
    this.stipendio = stipendio;
  }

  dettagli() {
    return `Nome: ${this.nome}, Ruolo: ${this.ruolo}, Stipendio: ${this.stipendio}`;
  }
}


class Manager extends Impiegato {
  team = [];

  constructor(nome, ruolo, stipendio){
    super(nome,ruolo,stipendio)
  }

  aggiungiMembroTeam(nome){

    this.team.push(nome);
 
  }

  dettagli() {
    return `Nome: ${this.nome}, Ruolo: Manager, Stipendio: ${this.stipendio}, Team: ${this.team}`;
  }
}

class Interno extends Impiegato {

  durataStage;

  constructor(nome, ruolo, stipendio, durataStage){
    super(nome,ruolo,stipendio);
    this.durataStage = durataStage;
  }

  dettagli() {
    return `Nome: ${this.nome}, Ruolo: Interno, Stipendio: ${this.stipendio}, Durata Stage: ${this.durataStage} mesi`;
  }

}


// Creazione di istanze di Impiegato
const impiegato1 = new Impiegato("Mario", "Sviluppatore", 1200);
const impiegato2 = new Impiegato("Luigi", "Designer", 1300);
const impiegato3 = new Impiegato("Anna", "Tester", 1100);

// Creazione di un'istanza di Manager
const manager = new Manager("Federico", "Manager", 1500);
manager.aggiungiMembroTeam(impiegato1.nome);
manager.aggiungiMembroTeam(impiegato2.nome);

console.log(manager.team);

// Creazione di un'istanza di Interno
const interno = new Interno("Giorgio", "Interno", 800, 6);

// Utilizzo dei metodi dettagli()
console.log(impiegato1.dettagli());
console.log(manager.dettagli());
console.log(interno.dettagli());














