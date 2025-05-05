/*
Implementar  una clase que simule el comportamiento de una Calculadora, con dos números y las cuatro operaciones básicas: suma resta, multiplicación y división. Todas la operaciones deben retornar un resultado, que luego va a ser mostrado por un método aparte. A su vez en las operaciones de multiplicación y división se debe validar que no se ingrese un valor igual a 0. Probar la calculadora con diferentes valores
*/

class Calculadora{
    private numUno : number;
    private numDos : number;
    private suma : number;
    private resta : number;
    private multiplica : number;
    private division : number;

    
    public constructor (numUno : number, numDos : number){
        this.numUno = numUno;
        this.numDos = numDos;
        this.suma = this.numUno + this.numDos;
        this.resta = this.numUno - this.numDos;
        this.multiplica = this.numUno * this.numDos;
        this.division = this.numUno / this.numDos;
    }

    public sumar() : void {
    console.log(`La suma de los números ${this.numUno} y ${this.numDos} es igual a ${this.suma}.\n`);
    }

    public restar() : void {
    console.log(`La resta de los números ${this.numUno} y ${this.numDos} es igual a ${this.resta}.\n`);
    }

    public multiplicar() : void {
        if (this.multiplica === 0){
            console.log ("ERROR: Ingresaste un numero inválido (0).")
        } else{
            console.log(`La multiplicación de los números ${this.numUno} y ${this.numDos} es igual a ${this.multiplica}.\n`);
        }
    }

    public dividir() : void {
        if (this.division === 0){
            console.log ("ERROR: Ingresaste un numero inválido (0).")
        } else{
            console.log(`La división de los números ${this.numUno} y ${this.numDos} es igual a ${this.division}.\n`);
        }
    }
}

const operaciones = new Calculadora(5,10)
const operacionError = new Calculadora(0,5)

operaciones.sumar();

operaciones.restar();

operacionError.multiplicar();
operaciones.multiplicar();

operacionError.dividir();
operaciones.dividir();
