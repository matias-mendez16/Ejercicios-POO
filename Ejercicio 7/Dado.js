"use strict";
/*
Implementar una clase  que simule el comportamiento de un dado de seis caras. La clase debe tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). A su vez la clase cuenta con varios métodos.
● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al atributo valor del dado
● Método que devuelve el valor actual del dado.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dado = void 0;
var Dado = /** @class */ (function () {
    function Dado() {
        this.lanzarUnDado();
    }
    Dado.prototype.lanzarUnDado = function () {
        this.valorDado = Math.floor(Math.random() * 6) + 1;
    };
    Dado.prototype.guardarValorDado = function () {
        return this.valorDado;
    };
    Dado.prototype.mostrarValorDado = function () {
        console.log("El numero que queres volver a tirar en el dado es: ".concat(this.valorDado, ".\n"));
    };
    return Dado;
}());
exports.Dado = Dado;
