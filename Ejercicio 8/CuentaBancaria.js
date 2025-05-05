/*
Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de cuenta y Saldo actual. Implementa los siguientes métodos:
● Un constructor que me permita establecer el número de cuenta y el saldo.
● Un método que incremente el saldo.
● Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada.
● Un método que devuelva el saldo actual
*/
var CuentaBancaria = /** @class */ (function () {
    function CuentaBancaria(numCuenta, saldoActual) {
        this.numCuenta = numCuenta;
        this.saldoActual = saldoActual;
    }
    CuentaBancaria.prototype.incrementarSaldo = function () {
        this.saldoActual += 1000;
    };
    CuentaBancaria.prototype.disminuirSaldo = function () {
        if (this.saldoActual > 499) {
            this.saldoActual -= 500;
        }
        else {
            console.log("\n                ----------------------------------------------------------\n                    Saldo menor a $500. No se puede debitar dinero.\n                ----------------------------------------------------------");
        }
    };
    CuentaBancaria.prototype.mostrarSaldo = function () {
        console.log("\n            -------------------------------------------------------------------\n                Saldo disponible en la Cuenta Bancaria n\u00FAmero ".concat(this.numCuenta, " es: $").concat(this.saldoActual, ".\n            -------------------------------------------------------------------"));
    };
    return CuentaBancaria;
}());
var cuenta1 = new CuentaBancaria(123, 500);
var cuenta2 = new CuentaBancaria(456, 600);
var cuenta3 = new CuentaBancaria(789, 700);
cuenta1.mostrarSaldo();
cuenta1.incrementarSaldo();
cuenta1.incrementarSaldo();
cuenta1.incrementarSaldo();
cuenta1.mostrarSaldo();
cuenta2.mostrarSaldo();
cuenta2.disminuirSaldo();
cuenta2.mostrarSaldo();
cuenta2.disminuirSaldo();
cuenta2.mostrarSaldo();
cuenta3.mostrarSaldo();
cuenta3.incrementarSaldo();
cuenta3.incrementarSaldo();
cuenta3.incrementarSaldo();
cuenta3.disminuirSaldo();
cuenta3.mostrarSaldo();
