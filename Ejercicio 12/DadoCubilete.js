"use strict";
/*
Usando la clase Dado del ejercicio 7, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dados o dados en particular
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cubilete = void 0;
var Dado_1 = require("../Ejercicio 7/Dado");
var Cubilete = /** @class */ (function () {
    function Cubilete() {
        this.iniciarNumDado();
    }
    Cubilete.prototype.iniciarNumDado = function () {
        this.dados = [];
        for (var i = 0; i < 5; i++) {
            this.dados.push(new Dado_1.Dado());
        }
    };
    Cubilete.prototype.lanzarTodosDados = function () {
        for (var i = 0; i < this.dados.length; i++) {
            this.dados[i].lanzarUnDado();
        }
    };
    Cubilete.prototype.lanzarAlgunosDados = function (cantDados) {
        for (var i = 0; i < cantDados.length; i++) {
            var numDado = cantDados[i] - 1;
            if (numDado >= 0 && numDado < this.dados.length) {
                this.dados[numDado].lanzarUnDado();
            }
            else {
                console.log("El n\u00FAmero del dado que queres volver a tirar no es correcto.");
            }
        }
    };
    Cubilete.prototype.mostrarValorDado = function () {
        console.log("\nEl valor de cada dado es:");
        for (var i = 0; i < this.dados.length; i++) {
            console.log("El valor del dado ".concat(i + 1, " es: ").concat(this.dados[i].guardarValorDado()));
        }
    };
    Cubilete.prototype.usarValoresDados = function () {
        return this.dados.map(function (dado) { return dado.guardarValorDado(); });
    };
    return Cubilete;
}());
exports.Cubilete = Cubilete;
