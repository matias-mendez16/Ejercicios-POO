"use strict";
/*
Usando la Clase automotor del ejercicio 1, implementar la clase Registro Automotor, con métodos para:
● Agregar un auto
● Buscar un auto por patente
● Eliminar o actualizar autos existentes
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.RegistroAutomotor = void 0;
var Auto_1 = require("../Ejercicio 1/Auto");
var RegistroAutomotor = /** @class */ (function () {
    function RegistroAutomotor() {
        this.auto = [];
    }
    RegistroAutomotor.prototype.agregAuto = function (auto) {
        this.auto.push(auto);
        console.log("El auto con la patente ".concat(auto.patente, " se agreg\u00F3 correctamente.\n"));
    };
    RegistroAutomotor.prototype.buscarPatente = function (patente) {
        var autoEncontrado = this.auto.find(function (auto) { return auto.patente === patente; });
        if (autoEncontrado) {
            console.log("La patente ".concat(autoEncontrado.patente, " fue encontrada con \u00E9xito."));
            autoEncontrado.info();
            return autoEncontrado;
        }
        else {
            console.log("No se encontr\u00F3 la patente ".concat(patente, "."));
            return undefined;
        }
    };
    RegistroAutomotor.prototype.eliminarAuto = function (patente) {
        for (var i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                this.auto.splice(i, 1);
                console.log("El auto con la patente ".concat(patente, " se elimin\u00F3.\n"));
                return;
            }
        }
        console.log("La patente ".concat(patente, " no est\u00E1 en el registro.\n"));
    };
    RegistroAutomotor.prototype.actualizarAuto = function (patente, autoActualizado) {
        for (var i = 0; i < this.auto.length; i++) {
            if (this.auto[i].patente === patente) {
                this.auto[i] = autoActualizado;
                console.log("Se actualizaron los datos del auto con la patente ".concat(patente, ".\n"));
                return;
            }
        }
        console.log("No se pudo actualizar porque el n\u00FAmero de patente ".concat(patente, " no existe.\n"));
    };
    RegistroAutomotor.prototype.mostrarRegistro = function () {
        console.log("Los autos guardados en el Registro Automotor son: \n");
        this.auto.forEach(function (auto) { return auto.info(); });
    };
    return RegistroAutomotor;
}());
exports.RegistroAutomotor = RegistroAutomotor;
var autoA = new Auto_1.Auto("Peugeot", "207", 1994, "ABC123");
var autoB = new Auto_1.Auto("Ford", "Focus", 2013, "DFG456");
var autoC = new Auto_1.Auto("Fiat", "Cronos", 2024, "HIJ789");
var autoD = new Auto_1.Auto("Ford", "Mustang", 2025, "AF058NC");
var registro = new RegistroAutomotor();
// registro.mostrarRegistro();
// registro.agregAuto(autoA);
// registro.agregAuto(autoB);
// registro.agregAuto(autoC);
// registro.agregAuto(autoD);
// registro.mostrarRegistro();
// registro.buscarPatente ("DFG456");
// registro.eliminarAuto ("HIJ789");
// registro.mostrarRegistro();
// registro.actualizarAuto ("ABC123", autoD);
// registro.mostrarRegistro();
