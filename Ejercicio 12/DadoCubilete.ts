/*
Usando la clase Dado del ejercicio 7, simular el comportamiento de un cubilete de 5 dados.
Implementar los métodos necesarios para que se puedan lanzar todos los dados o algún dados o dados en particular
*/

import { Dado } from "../Ejercicio 7/Dado";

export class Cubilete{
    private dados : Dado [];

    constructor() {
        this.iniciarNumDado();
    }

    iniciarNumDado() : void {
        this.dados = [];
        for (let i = 0; i < 5; i++){
            this.dados.push(new Dado());
        }
    }

    lanzarTodosDados() : void {
        for (let i = 0; i < this.dados.length; i++){
            this.dados[i].lanzarUnDado();
        }
    }

    lanzarAlgunosDados(cantDados : number[]) : void {
        for (let i = 0; i < cantDados.length; i++){
            const numDado = cantDados[i] - 1;
            if (numDado >= 0 && numDado < this.dados.length){
                this.dados[numDado].lanzarUnDado();
            } else {
                console.log (`El número del dado que queres volver a tirar no es correcto.`)
            }
        }
    }

    mostrarValorDado() : void {
        console.log ("\nEl valor de cada dado es:");
        for (let i = 0; i < this.dados.length; i++){
            console.log (`El valor del dado ${i + 1} es: ${this.dados[i].guardarValorDado()}`)
        }
    }

    usarValoresDados(): number[] {
        return this.dados.map(dado => dado.guardarValorDado());
    }
}

