class Automobile {
    marca;
    modello;
    anno;

    constructor(marca,modello,anno){
        this.marca = marca;
        this.modello = modello;
        this.anno = anno;
    }

    description(){
        console.log(`La marca: ${this.marca} e' del modello ${this.modello} dell'anno ${this.anno}`);
    }
}


let auto = new Automobile("Renault", "C4", 1988);

auto.description();