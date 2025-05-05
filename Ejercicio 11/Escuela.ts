

import { Alumno } from "./Alumno"
import { Profesores } from "./Profesores";

export class Escuela {
    public nombreEscuela : string;
    public listaAlumnos : Alumno [];
    public listaProfesores : Profesores [];

    constructor (nombreEscuela : string, listaAlumno : Alumno [], listaProfesores : Profesores[] = []){
        this.nombreEscuela = nombreEscuela
        this.listaAlumnos = listaAlumno
        this.listaProfesores = listaProfesores
    }

    public matricularAlumno (alumno : Alumno) : void {
        this.listaAlumnos.push (alumno)
    }

    public contratarProfesor (profesor : Profesores) : void {
        this.listaProfesores.push (profesor)
    }

    public expulsarAlumno (alumno : Alumno) : void {
        this.listaAlumnos = this.listaAlumnos.filter(expulsarAlumno => expulsarAlumno !== alumno)
    }

    public despedirProfesor (profesor : Profesores) : void {
        this.listaProfesores = this.listaProfesores.filter(despedirProfesor => despedirProfesor !== profesor)
    }

    public mostrarLista () : void {
        console.log ("\nLista de Profesores:")
        this.listaProfesores.forEach (profesor => console.log (profesor.nombreProfesor))

        console.log (`\nLista de Alumnos:`)
        this.listaAlumnos.forEach (alumnos => {
            console.log (alumnos.nombreAlumno)
        })
    }

}
