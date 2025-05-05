/*
Implementar  una clase que simule el comportamiento de una Calculadora, con dos números y las cuatro operaciones básicas: suma resta, multiplicación y división. Todas la operaciones deben retornar un resultado, que luego va a ser mostrado por un método aparte. A su vez en las operaciones de multiplicación y división se debe validar que no se ingrese un valor igual a 0. Probar la calculadora con diferentes valores
*/
var Calculadora = /** @class */ (function () {
    function Calculadora(numUno, numDos) {
        this.numUno = numUno;
        this.numDos = numDos;
        this.suma = this.numUno + this.numDos;
        this.resta = this.numUno - this.numDos;
        this.multiplica = this.numUno * this.numDos;
        this.division = this.numUno / this.numDos;
    }
    Calculadora.prototype.sumar = function () {
        console.log("La suma de los n\u00FAmeros ".concat(this.numUno, " y ").concat(this.numDos, " es igual a ").concat(this.suma, ".\n"));
    };
    Calculadora.prototype.restar = function () {
        console.log("La resta de los n\u00FAmeros ".concat(this.numUno, " y ").concat(this.numDos, " es igual a ").concat(this.resta, ".\n"));
    };
    Calculadora.prototype.multiplicar = function () {
        if (this.multiplica === 0) {
            console.log("ERROR: Ingresaste un numero inválido (0).");
        }
        else {
            console.log("La multiplicaci\u00F3n de los n\u00FAmeros ".concat(this.numUno, " y ").concat(this.numDos, " es igual a ").concat(this.multiplica, ".\n"));
        }
    };
    Calculadora.prototype.dividir = function () {
        if (this.division === 0) {
            console.log("ERROR: Ingresaste un numero inválido (0).");
        }
        else {
            console.log("La divisi\u00F3n de los n\u00FAmeros ".concat(this.numUno, " y ").concat(this.numDos, " es igual a ").concat(this.division, ".\n"));
        }
    };
    return Calculadora;
}());
var operaciones = new Calculadora(5, 10);
var operacionError = new Calculadora(0, 5);
operaciones.sumar();
operaciones.restar();
operacionError.multiplicar();
operaciones.multiplicar();
operacionError.dividir();
operaciones.dividir();
