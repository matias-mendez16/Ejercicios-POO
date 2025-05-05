"use strict";
/*
    Plantear una clase Auto especificando variables internas y métodos.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auto = void 0;
var Auto = /** @class */ (function () {
    function Auto(marca, modelo, añoFabricacion, patente) {
        this.aceleracion = 0;
        this.marca = marca;
        this.modelo = modelo;
        this.añoFabricacion = añoFabricacion;
        this.patente = patente;
    }
    Auto.prototype.info = function () {
        console.log("-----------------------------------------");
        console.log("Marca: " + this.marca);
        console.log("Modelo: " + this.modelo);
        console.log("Categoría: " + this.añoFabricacion);
        console.log("Patente: " + this.patente);
        console.log("Velocidad final después de acelerar y frenar: " + this.aceleracion);
        console.log("-----------------------------------------\n");
    };
    Auto.prototype.acelerar = function () {
        this.aceleracion = this.aceleracion + 20;
    };
    Auto.prototype.frenar = function () {
        this.aceleracion = this.aceleracion - 5;
    };
    return Auto;
}());
exports.Auto = Auto;
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
