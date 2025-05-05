"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Escuela = void 0;
var Escuela = /** @class */ (function () {
    function Escuela(nombreEscuela, listaAlumno, listaProfesores) {
        if (listaProfesores === void 0) { listaProfesores = []; }
        this.nombreEscuela = nombreEscuela;
        this.listaAlumnos = listaAlumno;
        this.listaProfesores = listaProfesores;
    }
    Escuela.prototype.matricularAlumno = function (alumno) {
        this.listaAlumnos.push(alumno);
    };
    Escuela.prototype.contratarProfesor = function (profesor) {
        this.listaProfesores.push(profesor);
    };
    Escuela.prototype.expulsarAlumno = function (alumno) {
        this.listaAlumnos = this.listaAlumnos.filter(function (expulsarAlumno) { return expulsarAlumno !== alumno; });
    };
    Escuela.prototype.despedirProfesor = function (profesor) {
        this.listaProfesores = this.listaProfesores.filter(function (despedirProfesor) { return despedirProfesor !== profesor; });
    };
    Escuela.prototype.mostrarLista = function () {
        console.log("\nLista de Profesores:");
        this.listaProfesores.forEach(function (profesor) { return console.log(profesor.nombreProfesor); });
        console.log("\nLista de Alumnos:");
        this.listaAlumnos.forEach(function (alumnos) {
            console.log(alumnos.nombreAlumno);
        });
    };
    return Escuela;
}());
exports.Escuela = Escuela;
