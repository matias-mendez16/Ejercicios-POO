

import { Libro } from "../Ejercicio 5/Libro";
import { GestorLibros } from "./GestorLibros";

const libro1 = new Libro ();
const libro2 = new Libro ();
const libro3 = new Libro ();
const gestor = new GestorLibros();

libro1.cargarLibro ();
libro2.cargarLibro ();
libro3.cargarLibro ();

libro1.infoLibro ();
libro2.infoLibro ();
libro3.infoLibro ();

gestor.insertarLibro();
gestor.insertarLibro();
gestor.insertarLibro();

gestor.consultarLibro();
gestor.consultarLibro();
gestor.consultarLibro();

gestor.modificarLibro();

gestor.eliminarLibro();

gestor.consultarLibro();
gestor.consultarLibro();
