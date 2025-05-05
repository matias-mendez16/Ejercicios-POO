/*
Aplicar lo visto hasta esta clase para modelar un sistema educativo donde:
• Los profesores deben tener un listado de sus listaAlumnos.
• Cada alumno debe saber su nota e informar si está aprobado o no (es decir si la nota es mayor que 7). 
• La escuela debe tener un registro de los listaAlumnos y maestros, y debe poder matricular/contratar y expulsar/despedir a los mismos
*/

import { Alumno } from "./Alumno"
import { Profesores } from "./Profesores";
import { Escuela } from "./Escuela"

const alumno1 = new Alumno ("Juan Pérez", 3);
const alumno2 = new Alumno ("Pedro Sánchez", 7);
const alumno3 = new Alumno ("Natalia López", 6);
const alumno4 = new Alumno ("Analia Reinoso", 9);
const profe1 = new Profesores ("Alejandro Guzmán");
const escuela = new Escuela ("Normal", [] , []);

alumno1.saberNota();
alumno2.saberNota();
alumno3.saberNota();
alumno4.saberNota();

profe1.agregarListaAlumno(alumno1)
profe1.tomarPresente();
profe1.agregarListaAlumno(alumno2)
profe1.agregarListaAlumno(alumno3)
profe1.agregarListaAlumno(alumno4)
profe1.tomarPresente();

escuela.mostrarLista();
escuela.contratarProfesor(new Profesores ("Marcela Rodríguez"));
escuela.despedirProfesor (profe1)
escuela.mostrarLista();
escuela.matricularAlumno (new Alumno ("Matías Méndez", 10))
escuela.expulsarAlumno (alumno1)
escuela.mostrarLista();

