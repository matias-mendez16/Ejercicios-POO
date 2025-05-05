"use strict";
/*
Implementar la clase Televisor con todos los atributos y métodos, incluido la funcionalidad mute
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.Televisor = void 0;
var Televisor = /** @class */ (function () {
    function Televisor(marca) {
        this.canal = 1;
        this.volumen = 0;
        this.prendido = false;
        this.muteado = false;
        this.marca = marca;
    }
    Televisor.prototype.prenderTv = function () {
        this.prendido = !this.prendido;
        this.prendido ? console.log("Televisor ".concat(this.marca, " prendido.")) : console.log("Televisor ".concat(this.marca, " apagado.\n"));
    };
    Televisor.prototype.muteOnOff = function () {
        if (this.volumen < 0)
            this.muteado = true;
    };
    Televisor.prototype.info = function () {
        if (this.prendido === false) {
            return;
        }
        else {
            console.log("\n                ----------------------------------\n                    Canal: ".concat(this.canal, "\n                    Volumen: ").concat(this.volumen, "\n                    Mute: ").concat(this.muteado, "\n                ----------------------------------\n                "));
        }
    };
    Televisor.prototype.subirCanal = function () {
        if (this.canal === 99) {
            this.canal = 1;
        }
        else {
            this.canal += 1;
        }
    };
    Televisor.prototype.bajarCanal = function () {
        if (this.canal === 1) {
            this.canal = 99;
        }
        else {
            this.canal -= 1;
        }
    };
    Televisor.prototype.selecCanal = function (numCanal) {
        if (numCanal > 0 && numCanal <= 99) {
            this.canal = numCanal;
        }
    };
    Televisor.prototype.subirVolumen = function () {
        if (this.volumen > 100) {
            if (this.muteado = true) {
                this.muteado = false;
            }
        }
        else {
            if (this.muteado = true) {
                this.muteado = false;
            }
            this.volumen += 1;
        }
    };
    Televisor.prototype.bajarVolumen = function () {
        if (this.volumen > 0) {
            this.volumen -= 1;
        }
        else {
            this.muteado = true;
        }
    };
    return Televisor;
}());
exports.Televisor = Televisor;
// const tv1 = new Televisor ("Noblex")
// const tv2 = new Televisor ("Sanyo")
// tv1.prenderTv();
// tv1.subirCanal();
// tv1.subirCanal();
// tv1.subirVolumen();
// tv1.subirVolumen();
// tv1.subirVolumen();
// tv1.info();
// tv1.selecCanal(98)
// tv1.subirCanal();
// tv1.subirCanal();
// tv1.info();
// tv1.prenderTv();
// tv1.info();
// tv2.prenderTv();
// tv2.bajarCanal();
// tv2.bajarVolumen();
// tv2.info();
// tv2.prenderTv();
// tv2.info();
