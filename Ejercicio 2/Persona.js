"use strict";
/*
Plantear una clase Persona, pensar que atributos y métodos puede tener e implementarla.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellido, edad, direccion, numDocumento) {
        this.pasos = 0;
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.direccion = direccion;
        this.numDocumento = numDocumento;
        this.pasos = 0;
        this.puntaje = 0;
        if (this.edad >= 18) {
            this.mayorEdad = true;
        }
        else {
            this.mayorEdad = false;
        }
    }
    Persona.prototype.presentar = function () {
        console.log("Hola! Me llamo ".concat(this.nombre, " ").concat(this.apellido, ", tengo ").concat(this.edad, " a\u00F1os y vivo en ").concat(this.direccion, ". \u00BFSoy mayor de edad? ").concat(this.mayorEdad, "."));
        console.log("Camin\u00E9 ".concat(this.pasos, " pasos.\n"));
        console.log("Tengo ".concat(this.puntaje, " puntos.\n"));
    };
    Persona.prototype.mostrarDocumento = function () {
        return this.numDocumento;
    };
    Persona.prototype.caminar = function () {
        this.pasos = this.pasos + 1;
    };
    Persona.prototype.sumarPuntos = function (puntaje) {
        this.puntaje += puntaje;
    };
    Persona.prototype.darPuntajeFinales = function () {
        return this.puntaje;
    };
    return Persona;
}());
exports.Persona = Persona;
var persona1 = new Persona("Matías", "Méndez", 30, "calle 14", 123456789);
var persona2 = new Persona("Agustina", "Ramundo", 10, "calle 12", 987654321);
console.log(persona1.mostrarDocumento());
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
console.log(persona2.mostrarDocumento());
7;
