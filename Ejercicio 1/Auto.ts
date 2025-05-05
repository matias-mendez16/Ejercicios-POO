/*
    Plantear una clase Auto especificando variables internas y métodos.
*/

export class Auto { 
    private marca: string;
    private modelo : string;
    private añoFabricacion : number;
    private aceleracion : number = 0;
    public patente : string;

    public constructor (marca : string, modelo : string , añoFabricacion : number , patente : string){
        this.marca = marca
        this.modelo = modelo
        this.añoFabricacion = añoFabricacion
        this.patente = patente
    }

    info() : void {
        console.log ("-----------------------------------------")
        console.log ("Marca: " + this.marca);
        console.log ("Modelo: " + this.modelo)
        console.log ("Categoría: " + this.añoFabricacion)
        console.log ("Patente: " + this.patente)
        console.log ("Velocidad final después de acelerar y frenar: " + this.aceleracion);
        console.log ("-----------------------------------------\n")
    }

    acelerar() : void {
        this.aceleracion = this.aceleracion + 20;
    }

    frenar() : void {
        this.aceleracion = this.aceleracion - 5;
    }

}

// const auto1= new Auto("Peugeot","207", 1994, "ABC123");
// const auto2= new Auto("Ford","Focus", 2013, "DFG456");
// const auto3= new Auto("Fiat","Cronos", 2024, "HIJ789");

// auto1.acelerar();
// auto1.frenar();
// auto1.acelerar();
// auto1.frenar();
// auto1.acelerar();
// auto1.info();

// auto2.acelerar();
// auto2.frenar();
// auto2.frenar();
// auto2.frenar();
// auto2.frenar();
// auto2.acelerar();
// auto2.info();

// auto3.acelerar();
// auto3.acelerar();
// auto3.acelerar();
// auto3.frenar();
// auto3.info();

