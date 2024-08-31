class Automobile {
    marca;
    modello;
    anno;
    chilometraggio;


    #contatoreChiamata = 0;

    constructor(marca,modello,anno,chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    
    aggiungiChilometraggio(number){
        
        this.chilometraggio = this.chilometraggio + number;
        
    }

    static confrontaChilometraggio(auto1,auto2){
        if(auto1.chilometraggio > auto2.chilometraggio){
            document.write(`Il chilometreggio di ${auto1.marca} e' piu elevato`);
        } else if(auto1.chilometraggio = auto2.chilometraggio){
            document.write(`Il chilometreggio di ${auto1.marca} e' uguale`);
        } else {
            document.write("Hanno lo stesso chilometreggio");
        }
    }
    
    mostraChilometraggio(){
        console.log(`${this.chilometraggio}`);
    }
    
    description(){
        console.log(`La marca: ${this.marca} e' del modello ${this.modello} dell'anno ${this.anno} e ${this.chilometraggio}`);
        this.#incrementaContatore();
    }

    #calcolaEta(){

        return this.anno -= new Date().getFullYear();
    }

    mostraEta(){

        console.log(this.#calcolaEta());

    }

    _controllaChilometri(){
        if(this.chilometraggio > 100_000){
            alert("Chilometraggio superiore a 100_000");
        } else {
            console.log("tutto perfetto");
        }
    }

    #incrementaContatore(){
        this.#contatoreChiamata++;
    }

}


let auto = new Automobile("Renault", "C4", 1988,200_000);
let auto2 = new Automobile("Mercedes", "C4", 1988,100_000);



class Elettrica extends Automobile {
    autonomia;
    
    constructor(marca,modello,anno,chilometraggio,autonomia){
        super(marca,modello,anno,chilometraggio);
        this.autonomia = autonomia;
    }
    
    description(){
        
        console.log(`La marca: ${this.marca} e' del modello ${this.modello} dell'anno ${this.anno} e ${this.chilometraggio} in piu ha l'autonomia di ${this.autonomia} km`);
        
    }
    
    ricarica(km){
        this.autonomia += km;
    }
    
    mostraRicarica(){
        console.log(`${this.autonomia}`);
    }
    
    _controllaChilometri(){
        if(this.chilometraggio > 200_000){
            alert(`Cambiare batteria dell'auto: ${this.modello}`)
        }
    }
    
}

let autoElettrica = new Elettrica("MErcedes", "GLS", 2024, 150000, 300);
let peguoet = new Elettrica("Peguet", "C3", 2022, 250_000,500);



Automobile.prototype.saluta = function() {
    
    console.log(`Ciaooo ${this.marca} come stai ${this.modello}`);
}

document.write(auto.saluta());
document.write(autoElettrica.saluta());


auto.mostraEta();
auto.description();
auto._controllaChilometri();

auto.aggiungiChilometraggio(1);
auto.mostraChilometraggio();
autoElettrica.description();
peguoet._controllaChilometri();
autoElettrica.ricarica(100);
autoElettrica.mostraRicarica();

Automobile.confrontaChilometraggio(auto,auto2);