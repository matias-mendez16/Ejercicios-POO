

import { Alumno } from "./Alumno"

export class Profesores {
    public nombreProfesor : string;
    public listaAlumnos : Alumno [];

    public constructor (nombreProfesor : string){
        this.nombreProfesor = nombreProfesor;
        this.listaAlumnos = [];
    }

    public agregarListaAlumno(alumno : Alumno) : void {
        this.listaAlumnos.push (alumno);
    }

    public tomarPresente() : void {
        console.log (` \nProfesor: ${this.nombreProfesor}.`);
        this.listaAlumnos.forEach (alumno =>{
            console.log (`Alumno: ${alumno.nombreAlumno}. Su nota es un ${alumno.nota}.`)
        });
        }
    }
