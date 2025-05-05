"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesores = void 0;
var Profesores = /** @class */ (function () {
    function Profesores(nombreProfesor) {
        this.nombreProfesor = nombreProfesor;
        this.listaAlumnos = [];
    }
    Profesores.prototype.agregarListaAlumno = function (alumno) {
        this.listaAlumnos.push(alumno);
    };
    Profesores.prototype.tomarPresente = function () {
        console.log(" \nProfesor: ".concat(this.nombreProfesor, "."));
        this.listaAlumnos.forEach(function (alumno) {
            console.log("Alumno: ".concat(alumno.nombreAlumno, ". Su nota es un ").concat(alumno.nota, "."));
        });
    };
    return Profesores;
}());
exports.Profesores = Profesores;
