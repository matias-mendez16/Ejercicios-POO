"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Alumno = void 0;
var Alumno = /** @class */ (function () {
    function Alumno(nombreAlumno, nota) {
        this.nombreAlumno = nombreAlumno;
        this.nota = nota;
    }
    Alumno.prototype.agregarAlumno = function (nombreAlumno) {
        this.nombreAlumno = nombreAlumno;
    };
    Alumno.prototype.saberNota = function () {
        if (this.nota < 7) {
            console.log("La nota del alumno ".concat(this.nombreAlumno, " es ").concat(this.nota, ". Est\u00E1 desaprobado. \n"));
        }
        else {
            console.log("La nota del alumno ".concat(this.nombreAlumno, " es ").concat(this.nota, ". Est\u00E1 aprobado.\n"));
        }
    };
    return Alumno;
}());
exports.Alumno = Alumno;
