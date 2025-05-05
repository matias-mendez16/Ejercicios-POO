"use strict";
/*
Implementar una clase Decodificador y relacionarla con la clase Televisor del ejercicio 3.
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Decodificador = void 0;
var Decodificador = /** @class */ (function () {
    function Decodificador(televisor, marcaDecod) {
        this.televisor = televisor;
        this.marcaDecod = marcaDecod;
    }
    Decodificador.prototype.subirCanalDeco = function () {
        this.televisor.subirCanal();
        console.log("El decodificador ".concat(this.marcaDecod, " subi\u00F3 un canal."));
    };
    Decodificador.prototype.bajarCanalDeco = function () {
        this.televisor.bajarCanal();
        console.log("El decodificador ".concat(this.marcaDecod, " baj\u00F3 un canal."));
    };
    Decodificador.prototype.subirVolDeco = function () {
        this.televisor.subirVolumen();
        console.log("El decodificador ".concat(this.marcaDecod, " subi\u00F3 el volumen."));
    };
    Decodificador.prototype.bajarVolDeco = function () {
        this.televisor.bajarVolumen();
        console.log("El decodificador ".concat(this.marcaDecod, " baj\u00F3 el volumen."));
    };
    return Decodificador;
}());
exports.Decodificador = Decodificador;
// const tv4 = new Televisor ("con el super DECOPRO!!");
// const decopro = new Decodificador (tv4, "SUPER MEGA DECOPRO")
// tv4.prenderTv();
// tv4.info();
// decopro.subirCanalDeco();
// decopro.subirCanalDeco();
// decopro.subirCanalDeco();
// decopro.subirCanalDeco();
// tv4.info()
// decopro.bajarCanalDeco();
// decopro.bajarCanalDeco();
// tv4.info();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// tv4.info();
// decopro.bajarVolDeco();
// decopro.bajarVolDeco();
// tv4.info();
// decopro.bajarVolDeco();
// decopro.bajarVolDeco();
// decopro.bajarVolDeco();
// decopro.bajarVolDeco();
// decopro.bajarVolDeco();
// tv4.info();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// decopro.subirVolDeco();
// tv4.info();
// tv4.prenderTv();
// tv4.info();
