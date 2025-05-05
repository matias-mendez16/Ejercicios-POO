"use strict";
/*
Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
• Los profesores deben tener un listado de sus listaAlumnos.
• Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7).
• La escuela debe tener un registro de los listaAlumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos
*/
Object.defineProperty(exports, "__esModule", { value: true });
var Alumno_1 = require("./Alumno");
var Profesores_1 = require("./Profesores");
var Escuela_1 = require("./Escuela");
var alumno1 = new Alumno_1.Alumno("Juan Pérez", 3);
var alumno2 = new Alumno_1.Alumno("Pedro Sánchez", 7);
var alumno3 = new Alumno_1.Alumno("Natalia López", 6);
var alumno4 = new Alumno_1.Alumno("Analia Reinoso", 9);
var profe1 = new Profesores_1.Profesores("Alejandro Guzmán");
var escuela = new Escuela_1.Escuela("Normal", [], []);
alumno1.saberNota();
alumno2.saberNota();
alumno3.saberNota();
alumno4.saberNota();
profe1.agregarListaAlumno(alumno1);
profe1.tomarPresente();
profe1.agregarListaAlumno(alumno2);
profe1.agregarListaAlumno(alumno3);
profe1.agregarListaAlumno(alumno4);
profe1.tomarPresente();
escuela.mostrarLista();
escuela.contratarProfesor(new Profesores_1.Profesores("Marcela Rodríguez"));
escuela.despedirProfesor(profe1);
escuela.mostrarLista();
escuela.matricularAlumno(new Alumno_1.Alumno("Matías Méndez", 10));
escuela.expulsarAlumno(alumno1);
escuela.mostrarLista();
