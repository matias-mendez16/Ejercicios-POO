

export class Alumno {
    public nombreAlumno : string;
    public nota : number;

    public constructor (nombreAlumno : string, nota : number) {
        this.nombreAlumno = nombreAlumno
        this.nota = nota
    }

    public agregarAlumno(nombreAlumno) : void {
        this.nombreAlumno = nombreAlumno
    }

    public saberNota() : void {
        if (this.nota < 7){
            console.log (`La nota del alumno ${this.nombreAlumno} es ${this.nota}. Está desaprobado. \n`)
        } else {
            console.log (`La nota del alumno ${this.nombreAlumno} es ${this.nota}. Está aprobado.\n`)
        }
    }
}

