/*
Implementar una clase Decodificador y relacionarla con la clase Televisor del ejercicio 3.
*/

import { Televisor } from "../Ejercicio 3/Televisor";

export class Decodificador {
    private televisor : Televisor;
    private marcaDecod : string;

    constructor (televisor : Televisor , marcaDecod : string){
        this.televisor = televisor
        this.marcaDecod = marcaDecod
    }

    public subirCanalDeco() : void {
        this.televisor.subirCanal();
        console.log(`El decodificador ${this.marcaDecod} subió un canal.`)
    }

    public bajarCanalDeco() : void {
        this.televisor.bajarCanal();
        console.log(`El decodificador ${this.marcaDecod} bajó un canal.`)
    }

    public subirVolDeco() : void {
        this.televisor.subirVolumen();
        console.log(`El decodificador ${this.marcaDecod} subió el volumen.`)
    }

    public bajarVolDeco() : void {
        this.televisor.bajarVolumen();
        console.log(`El decodificador ${this.marcaDecod} bajó el volumen.`)
    }

}

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