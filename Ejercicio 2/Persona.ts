/*
Plantear una clase Persona, pensar que atributos y métodos puede tener e implementarla.
*/

export class Persona {
    public nombre : string;
    private apellido : string;
    private edad: number;
    private direccion: string;
    private numDocumento: number;
    private mayorEdad : boolean;
    private pasos : number = 0;
    public puntaje : number;

    public constructor (nombre : string, apellido : string, edad : number, direccion : string, numDocumento: number){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.numDocumento = numDocumento;
        this.pasos = 0
        this.puntaje = 0
    
        if (this.edad >= 18){
            this.mayorEdad = true
        } else {
            this.mayorEdad = false
        }
    }

    presentar () : void {
    console.log(`Hola! Me llamo ${this.nombre} ${this.apellido}, tengo ${this.edad} años y vivo en ${this.direccion}. ¿Soy mayor de edad? ${this.mayorEdad}.`)
    console.log (`Caminé ${this.pasos} pasos.\n`)
    console.log (`Tengo ${this.puntaje} puntos.\n`)
    }

    mostrarDocumento() : number {
        return this.numDocumento;
    }

    caminar () : void {
        this.pasos = this.pasos +1;
    }

    sumarPuntos(puntaje : number) : void {
        this.puntaje += puntaje;
    }

    darPuntajeFinales() : number {
        return this.puntaje
    }

}


const persona1 = new Persona ("Matías", "Méndez", 30, "calle 14", 123456789);
const persona2 = new Persona ("Agustina", "Ramundo", 10, "calle 12", 987654321);

console.log (persona1.mostrarDocumento());
persona1.caminar();
persona1.caminar();
persona1.caminar();
persona1.caminar();
persona1.presentar();


persona2.presentar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.caminar();
persona2.presentar();
console.log (persona2.mostrarDocumento());7

