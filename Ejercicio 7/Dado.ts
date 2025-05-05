/*
Implementar una clase  que simule el comportamiento de un dado de seis caras. La clase debe tener un atributo que almacena el valor actual del dado (un número entre 1 y 6). A su vez la clase cuenta con varios métodos.
● Método constructor que inicializa el dado con un valor aleatorio entre 1 y 6.
● Método que simula el lanzamiento del dado, asignando un nuevo valor aleatorio entre 1 y 6 al atributo valor del dado
● Método que devuelve el valor actual del dado.
*/

export class Dado{
    public valorDado : number

    constructor() {
        this.lanzarUnDado();
    }

    lanzarUnDado() : void {
        this.valorDado = Math.floor(Math.random() * 6) + 1;
    }

    guardarValorDado() : number {
        return this.valorDado;
    }

    mostrarValorDado() : void {
        console.log (`El numero que queres volver a tirar en el dado es: ${this.valorDado}.\n`)
    }
}

