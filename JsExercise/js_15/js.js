class Automobile {
    marca;
    modello;
    anno;
    chilometraggio;

    constructor(marca,modello,anno,chilometraggio){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
        this.chilometraggio = chilometraggio;
    }

    
    aggiungiChilometraggio(number){
        
        this.chilometraggio = this.chilometraggio + number;
        
    }
    
    mostraChilometraggio(){
        console.log(`${this.chilometraggio}`);
    }
    
    description(){
        console.log(`La marca: ${this.marca} e' del modello ${this.modello} dell'anno ${this.anno} e ${this.chilometraggio}`);
    }

}


let auto = new Automobile("Renault", "C4", 1988,200000);

auto.description();

auto.aggiungiChilometraggio(1);
 auto.mostraChilometraggio();





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

 }

 let autoElettrica = new Elettrica("MErcedes", "GLS", 2024, 150000, 300);

 autoElettrica.description();

 autoElettrica.ricarica(100);
 autoElettrica.mostraRicarica();