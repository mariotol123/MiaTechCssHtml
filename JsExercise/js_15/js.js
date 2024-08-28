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

    description(){
        console.log(`La marca: ${this.marca} e' del modello ${this.modello} dell'anno ${this.anno}`);
    }

    aggiungiChilometraggio(number){
        
        this.chilometraggio = this.chilometraggio + number;

    }

     mostraChilometraggio(){
        console.log(`${this.chilometraggio}`);
     }

}


let auto = new Automobile("Renault", "C4", 1988,200000);

auto.description();

auto.aggiungiChilometraggio(1);
 auto.mostraChilometraggio();