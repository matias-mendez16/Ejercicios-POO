/*
Implementar a una clase que represente una cuenta bancaria, con dos atributos: Número de cuenta y Saldo actual. Implementa los siguientes métodos:
● Un constructor que me permita establecer el número de cuenta y el saldo.
● Un método que incremente el saldo.
● Un método que disminuya el saldo si hay fondos suficientes, caso contrario no hace nada.
● Un método que devuelva el saldo actual
*/

class CuentaBancaria {
    private numCuenta : number;
    private saldoActual : number;

    public constructor (numCuenta : number, saldoActual : number){
        this.numCuenta = numCuenta
        this.saldoActual= saldoActual
    }

    public incrementarSaldo() : void {
        this.saldoActual += 1000
    }

    public disminuirSaldo() : void {
        if (this.saldoActual > 499){
            this.saldoActual -= 500
        }else {
            console.log (`
                ----------------------------------------------------------
                    Saldo menor a $500. No se puede debitar dinero.
                ----------------------------------------------------------`)
        }
    }

    public mostrarSaldo() : void {
        console.log (`
            -------------------------------------------------------------------
                Saldo disponible en la Cuenta Bancaria número ${this.numCuenta} es: $${this.saldoActual}.
            -------------------------------------------------------------------`)
    }

}

const cuenta1 = new CuentaBancaria (123, 500)
const cuenta2 = new CuentaBancaria (456, 600)
const cuenta3 = new CuentaBancaria (789, 700)

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
